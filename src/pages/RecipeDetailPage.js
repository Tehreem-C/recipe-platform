// frontend/src/pages/RecipeDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipes } from '../utils/dummyData'; // Use getRecipes for dummy data
import { getUserRecipes } from '../api/index'; // Import getUserRecipes for user-added recipes
import { useAuth } from '../contexts/AuthContext'; // NEW: Import useAuth
import StarRating from '../components/StarRating'; // NEW: Import StarRating component
import {
    submitRating,
    fetchAverageRating,
    fetchUserRating
} from '../api/index'; // Import rating API functions

import '../styles/RecipeDetail.css';
import '../styles/RecipeCard.css'; // For tag styling if needed (ensure this also exists)

const RecipeDetailPage = () => {
    const { id } = useParams();
    const { user, loading: authLoading } = useAuth(); // Get user and auth loading from context

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userRating, setUserRating] = useState(0); // State for user's rating
    const [averageRating, setAverageRating] = useState(0); // State for average rating
    const [totalRatings, setTotalRatings] = useState(0); // State for total number of ratings

    useEffect(() => {
        const fetchRecipeAndRatings = async () => {
            if (authLoading) return; // Wait until auth state is known before fetching user-specific data

            setLoading(true);
            setError(null);

            try {
                // Fetch all available recipes (dummy and user-added)
                const dummyDataRecipes = getRecipes();
                const userRecipesResponse = await getUserRecipes();
                const userSavedRecipes = userRecipesResponse.data || [];

                const allCombinedRecipes = [
                    ...dummyDataRecipes,
                    ...userSavedRecipes.filter(userRec =>
                        !dummyDataRecipes.some(dummyRec => dummyRec._id === userRec._id || dummyRec.id === userRec._id)
                    )
                ];

                // Find the recipe by its ID
                const foundRecipe = allCombinedRecipes.find(r => (r._id === id) || (r.id === id));

                if (foundRecipe) {
                    setRecipe(foundRecipe);

                    // Fetch average rating for this recipe
                    const avgRatingData = await fetchAverageRating(id);
                    if (avgRatingData.data) {
                        setAverageRating(avgRatingData.data.average || 0);
                        setTotalRatings(avgRatingData.data.count || 0);
                    } else {
                        setAverageRating(0);
                        setTotalRatings(0);
                    }

                    // Fetch user's personal rating if logged in
                    if (user && user.id) {
                        const userRatingData = await fetchUserRating(id, user.id);
                        if (userRatingData.data && userRatingData.data.rating) {
                            setUserRating(userRatingData.data.rating);
                        } else {
                            setUserRating(0);
                        }
                    } else {
                        setUserRating(0); // Reset user rating if not logged in
                    }

                } else {
                    setError('Recipe not found');
                }
            } catch (err) {
                console.error("Error fetching recipe or ratings in detail page:", err);
                setError('Failed to load recipe. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecipeAndRatings();
    }, [id, user, authLoading]); // Dependencies on 'id', 'user' (for user-specific rating), and 'authLoading'

    const handleRatingChange = async (newRating) => {
        if (!user) {
            // Using a custom message box instead of alert
            // (You'll need a state variable and a component for this)
            // For now, a simple console log will suffice as a placeholder.
            console.error("Please log in to rate recipes!");
            return;
        }

        try {
            // Optimistically update UI
            setUserRating(newRating);
            // Submit rating to backend (simulated via API)
            await submitRating(id, user.id, newRating);
            // Re-fetch average rating after user has submitted their rating
            const updatedAvgRatingData = await fetchAverageRating(id);
            if (updatedAvgRatingData.data) {
                setAverageRating(updatedAvgRatingData.data.average || 0);
                setTotalRatings(updatedAvgRatingData.data.count || 0);
            }

        } catch (err) {
            console.error("Error submitting rating:", err);
            // Revert UI if submission failed by re-fetching user's rating
            const originalUserRatingData = await fetchUserRating(id, user.id);
            setUserRating(originalUserRatingData.data.rating || 0);
        }
    };

    if (loading || authLoading) {
        return (
            <div className="recipe-detail-container loading-state">
                <p>Loading recipe...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="recipe-detail-container error-state">
                <p>{error}</p>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="recipe-detail-container not-found-state">
                <p>Recipe not found.</p>
            </div>
        );
    }
    
    // Fix for the instructions.map error
    const instructionsList = Array.isArray(recipe.instructions)
        ? recipe.instructions
        : (typeof recipe.instructions === 'string'
            ? recipe.instructions.split('\n').filter(Boolean)
            : []);

    return (
        <div className="recipe-detail-container">
            <div className="recipe-detail-header">
                <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
                <h1 className="recipe-detail-title">{recipe.title}</h1>
                <p className="recipe-detail-description">{recipe.description}</p>

                {/* Star Rating Display and Input */}
                <div className="rating-section">
                    {averageRating > 0 && (
                        <p className="average-rating-display">
                            Average Rating: <StarRating initialRating={averageRating} readOnly={true} />
                            ({averageRating.toFixed(1)} out of 5 stars, from {totalRatings} ratings)
                        </p>
                    )}
                    {user ? ( // Only show "Your Rating" if logged in
                        <div className="your-rating">
                            Your Rating: <StarRating initialRating={userRating} onRatingChange={handleRatingChange} />
                            {userRating > 0 && <p className="rating-feedback">Thanks for your rating!</p>}
                        </div>
                    ) : (
                        <p className="login-to-rate">Login to rate this recipe!</p>
                    )}
                </div>


                <div className="recipe-meta-data">
                    {recipe.prepTime && <p>Prep: {recipe.prepTime}</p>}
                    {recipe.cookTime && <p>Cook: {recipe.cookTime}</p>}
                    {recipe.servings && <p>Servings: {recipe.servings}</p>}
                </div>
                <div className="recipe-tags">
                    {recipe.tags && recipe.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="recipe-sections">
                {recipe.ingredients && recipe.ingredients.length > 0 && (
                    <div className="ingredients-section">
                        <h2>Ingredients:</h2>
                        <ul>
                            {/* Assuming ingredients can be objects with name, quantity, unit or just strings */}
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{typeof ingredient === 'object' && ingredient.name ? `${ingredient.quantity || ''} ${ingredient.unit || ''} ${ingredient.name}`.trim() : ingredient}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Fixed instructions rendering to handle strings */}
                {instructionsList.length > 0 && (
                    <div className="instructions-section">
                        <h2>Instructions:</h2>
                        <ol>
                            {instructionsList.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeDetailPage;
