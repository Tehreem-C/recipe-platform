// src/components/RecipeCard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext'; // NEW: Import useAuth
import { addFavorite, removeFavorite, fetchUserFavorites, fetchAverageRating } from '../api/index'; // NEW: Import favorite and rating API functions

import '../styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    const { user, loading: authLoading } = useAuth(); // Get user and auth loading from context
    const fallbackImageUrl = "https://placehold.co/300x200/E9E9E9/333333?text=No+Image";

    const {
        _id,
        id,
        title = 'Untitled Recipe',
        description = 'No description available.',
        // Use either 'image' or 'imageUrl' from the recipe object
        image = recipe.imageUrl || fallbackImageUrl, 
        prepTime = 'N/A',
        cookTime = 'N/A',
        servings = 'N/A',
        tags = []
    } = recipe;

    const recipeUniqueId = _id || id; // Use _id first, then id for consistency

    const [isFavorited, setIsFavorited] = useState(false);
    const [cardAverageRating, setCardAverageRating] = useState(0); // For display on card

    useEffect(() => {
        const checkFavoriteAndRating = async () => {
            if (authLoading) return; // Wait until auth state is known

            // Check favorite status
            if (user && user.id) {
                try {
                    const favorites = await fetchUserFavorites(user.id);
                    setIsFavorited(favorites.data.includes(recipeUniqueId));
                } catch (err) {
                    console.error("Error fetching user favorites for card:", err);
                    setIsFavorited(false);
                }
            } else {
                setIsFavorited(false); // Not logged in, so not favorited
            }

            // Fetch average rating for the card
            try {
                const avgRatingData = await fetchAverageRating(recipeUniqueId);
                if (avgRatingData.data) {
                    setCardAverageRating(avgRatingData.data.average || 0);
                } else {
                    setCardAverageRating(0);
                }
            } catch (err) {
                console.error("Error fetching average rating for card:", err);
                setCardAverageRating(0);
            }
        };

        checkFavoriteAndRating();
    }, [recipeUniqueId, user, authLoading]); // Re-run when recipe ID, user, or authLoading changes

    const handleFavoriteClick = async (e) => {
        e.preventDefault(); // Prevent navigating to recipe detail page
        e.stopPropagation(); // Stop event from bubbling up to parent Link

        if (!user) { // Check if user is logged in
            // Using a custom message box instead of alert
            // (You'll need a state variable and a component for this)
            // For now, a simple console log will suffice as a placeholder.
            console.error("Please log in to save favorites!");
            return;
        }

        try {
            if (isFavorited) {
                await removeFavorite(recipeUniqueId, user.id);
                console.log(`Unfavorited recipe: ${title}`);
            } else {
                await addFavorite(recipeUniqueId, user.id);
                console.log(`Favorited recipe: ${title}`);
            }
            setIsFavorited(!isFavorited); // Toggle local state
        } catch (err) {
            console.error("Error updating favorite status:", err);
            // Revert UI if submission failed
            setIsFavorited(isFavorited);
        }
    };

    return (
        <div className="recipe-card">
            <Link to={`/recipes/${recipeUniqueId}`} className="recipe-card-link">
                <img
                    src={image || fallbackImageUrl}
                    alt={title}
                    className="recipe-card-image"
                    onError={(e) => { e.target.onerror = null; e.target.src=fallbackImageUrl; }} // Add fallback on error
                />
                <div className="recipe-card-content">
                    <h3 className="recipe-card-title">{title}</h3>
                    <p className="recipe-card-description">
                        {description ? description.substring(0, 100) + (description.length > 100 ? '...' : '') : 'No description available.'}
                    </p>

                    {/* Display average rating on card */}
                    {cardAverageRating > 0 && (
                        <div className="recipe-card-average-rating">
                            <span>⭐ {cardAverageRating.toFixed(1)} / 5</span>
                        </div>
                    )}

                    <div className="recipe-card-details">
                        {prepTime !== 'N/A' && <p>Prep: {prepTime}</p>}
                        {cookTime !== 'N/A' && <p>Cook: {cookTime}</p>}
                        {servings !== 'N/A' && <p>Servings: {servings}</p>}
                    </div>

                    <div className="recipe-card-tags">
                        {tags.length > 0 ? (
                            tags.map((tag, index) => (
                                <span key={`${tag}-${index}`} className="tag-item">
                                    {tag}
                                </span>
                            ))
                        ) : (
                            <span className="no-tags">No tags</span>
                        )}
                    </div>
                </div>
            </Link>

            <button
                className="favorite-button"
                onClick={handleFavoriteClick}
                aria-label={isFavorited ? "Unfavorite recipe" : "Favorite recipe"}
                title={isFavorited ? "Unfavorite this recipe" : "Favorite this recipe"}
            >
                {isFavorited ? <FaHeart color="red" /> : <FaRegHeart color="#333" />}
            </button>
        </div>
    );
};

export default RecipeCard;
