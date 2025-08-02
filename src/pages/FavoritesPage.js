// src/pages/FavoritesPage.js
import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { fetchFavoriteRecipesDetails } from '../api/index'; // Import the new API function
import { useAuth } from '../contexts/AuthContext'; // NEW: Import useAuth
import '../styles/HomePage.css'; // Reusing HomePage styles for grid layout
import '../styles/FavoritesPage.css'; // NEW: Specific styles for this page

const FavoritesPage = () => {
    const { user, loading: authLoading } = useAuth(); // Get user and auth loading from context
    const [favoritedRecipes, setFavoritedRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFavorites = async () => {
            if (authLoading) return; // Wait until auth state is known

            setLoading(true);
            setError(null);

            if (!user) {
                // If not logged in, show appropriate message
                setLoading(false);
                setError("Please log in to view your favorite recipes.");
                setFavoritedRecipes([]); // Clear any previous recipes
                return;
            }

            try {
                // Pass user.id to fetch favorites specific to the logged-in user
                const response = await fetchFavoriteRecipesDetails(user.id);
                setFavoritedRecipes(response.data);
            } catch (err) {
                console.error("Error loading favorite recipes:", err);
                setError("Failed to load your favorite recipes. Please try again.");
                setFavoritedRecipes([]);
            } finally {
                setLoading(false);
            }
        };

        loadFavorites();
    }, [user, authLoading]); // Re-run when user or authLoading state changes

    if (loading) {
        return <div className="favorites-page-container loading-state"><p>Loading your favorite recipes...</p></div>;
    }

    if (error) {
        return <div className="favorites-page-container error-state"><p>{error}</p></div>;
    }

    return (
        <div className="favorites-page-container home-page-container"> {/* Reusing HomePage container styles */}
            <h1 className="main-heading">My Favorite Recipes</h1>

            <div className="recipe-list"> {/* Reusing recipe-list styles for grid */}
                {favoritedRecipes.length > 0 ? (
                    favoritedRecipes.map(recipe => (
                        <RecipeCard key={recipe._id || recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <p className="no-recipes-message">You haven't favorited any recipes yet.</p>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;