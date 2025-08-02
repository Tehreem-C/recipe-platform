// frontend/src/components/HealthProfileForm.js
import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback
import { useAuth } from '../contexts/AuthContext'; // Corrected path for 'contexts'
import { getUserHealthProfile, saveUserHealthProfile } from '../api'; // Now uses the localStorage API
import '../styles/HealthProfileForm.css'; // Import the specific CSS for this component

const HealthProfileForm = () => {
    const { user, loading: authLoading, isAuthenticated } = useAuth();
    const [profile, setProfile] = useState({
        allergens_present: [],
        dietary_tags: [],
        unsuitable_conditions: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Define all possible options for your checkboxes
    const allAllergens = ['Peanuts', 'Tree Nuts', 'Dairy', 'Gluten', 'Soy', 'Eggs', 'Shellfish', 'Fish'];
    const allDietaryTags = ['Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Gluten-Free', 'Dairy-Free', 'Low-Carb', 'Halal'];
    const allUnsuitableConditions = ['Diabetes', 'High Blood Pressure', 'Kidney Disease', 'Pregnancy', 'Heart Disease'];

    // Wrap fetchProfile in useCallback to prevent unnecessary re-creations
    const fetchProfile = useCallback(async () => {
        if (isAuthenticated && user?.id) {
            setLoading(true);
            setError(null);
            try {
                const fetchedProfile = await getUserHealthProfile(user.id); // Call localStorage API
                if (fetchedProfile) {
                    setProfile({
                        allergens_present: fetchedProfile.allergens_present || [],
                        dietary_tags: fetchedProfile.dietary_tags || [],
                        unsuitable_conditions: fetchedProfile.unsuitable_conditions || [],
                    });
                } else {
                    // If no profile exists, initialize with empty arrays
                    setProfile({
                        allergens_present: [],
                        dietary_tags: [],
                        unsuitable_conditions: [],
                    });
                }
            } catch (err) {
                console.error("Failed to fetch health profile:", err);
                setError("Failed to load your health profile.");
            } finally {
                setLoading(false);
            }
        } else if (!authLoading) {
            setLoading(false);
            setProfile({ // Clear profile if user logs out
                allergens_present: [],
                dietary_tags: [],
                unsuitable_conditions: [],
            });
        }
    }, [isAuthenticated, user, authLoading]); // Dependencies for useCallback

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]); // Now useEffect depends on fetchProfile (which has its own dependencies)


    const handleCheckboxChange = (field, value) => {
        setProfile(prev => {
            const currentValues = prev[field];
            if (currentValues.includes(value)) {
                return { ...prev, [field]: currentValues.filter(item => item !== value) };
            } else {
                return { ...prev, [field]: [...currentValues, value] };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isAuthenticated || !user?.id) {
            alert('Please log in to save your health profile.');
            return;
        }
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            await saveUserHealthProfile(profile);
            setSuccess(true);
            alert('Health profile saved successfully!');
            // --- CRITICAL ADDITION: Re-fetch profile after successful save ---
            await fetchProfile(); // Call fetchProfile to update state from localStorage
            // ------------------------------------------------------------------
        } catch (err) {
            console.error("Failed to save health profile:", err);
            setError(`Failed to save health profile: ${err.message}`);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    if (authLoading) return <div className="loading-message">Loading authentication status...</div>;
    if (!isAuthenticated) return <div className="not-authenticated-message">Please log in to manage your health profile.</div>;
    if (loading && (!profile.allergens_present.length && !profile.dietary_tags.length && !profile.unsuitable_conditions.length)) {
        // Only show loading if no data is present AND still loading
        return <div className="loading-message">Loading health profile...</div>;
    }

    return (
        <div className="health-profile-form">
            <h2>My Health Profile</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Profile saved!</p>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Allergens Present</legend>
                    <div className="checkbox-group"> {/* This div applies the grid styling */}
                        {allAllergens.map(allergen => (
                            <label key={allergen} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value={allergen}
                                    checked={profile.allergens_present.includes(allergen)}
                                    onChange={() => handleCheckboxChange('allergens_present', allergen)}
                                />
                                {allergen}
                            </label>
                        ))}
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Dietary Preferences</legend>
                    <div className="checkbox-group"> {/* This div applies the grid styling */}
                        {allDietaryTags.map(tag => (
                            <label key={tag} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value={tag}
                                    checked={profile.dietary_tags.includes(tag)}
                                    onChange={() => handleCheckboxChange('dietary_tags', tag)}
                                />
                                {tag}
                            </label>
                        ))}
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Unsuitable Conditions</legend>
                    <div className="checkbox-group"> {/* This div applies the grid styling */}
                        {allUnsuitableConditions.map(condition => (
                            <label key={condition} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value={condition}
                                    checked={profile.unsuitable_conditions.includes(condition)}
                                    onChange={() => handleCheckboxChange('unsuitable_conditions', condition)}
                                />
                                {condition}
                            </label>
                        ))}
                    </div>
                </fieldset>

                <button type="submit" disabled={loading} className="button-primary"> {/* Ensure it uses your primary button style */}
                    {loading ? 'Saving...' : 'Save Profile'}
                </button>
            </form>
        </div>
    );
};

export default HealthProfileForm;