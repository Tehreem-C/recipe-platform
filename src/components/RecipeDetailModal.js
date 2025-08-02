// Example: Simplified RecipeDetail.js or a Rating/Favorite button component
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getRecipeById, submitRating, fetchUserRating, fetchAverageRating, addFavorite, removeFavorite, fetchUserFavorites } from '../api';

const RecipeDetail = () => {
    const { id } = useParams();
    const { user, isAuthenticated } = useAuth(); // Get user and auth status
    const [recipe, setRecipe] = useState(null);
    const [userRating, setUserRating] = useState(0);
    const [averageRating, setAverageRating] = useState({ average: 0, count: 0 });
    const [isFavorited, setIsFavorited] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRecipe = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data: fetchedRecipe } = await getRecipeById(id);
                setRecipe(fetchedRecipe);

                if (isAuthenticated && user?.id) {
                    const { data: favs } = await fetchUserFavorites(user.id);
                    setIsFavorited(favs.includes(id));

                    const { data: userRate } = await fetchUserRating(id, user.id);
                    setUserRating(userRate.rating);
                }
                const { data: avgRate } = await fetchAverageRating(id);
                setAverageRating(avgRate);

            } catch (err) {
                console.error("Failed to load recipe or related data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadRecipe();
    }, [id, user, isAuthenticated]); // Re-run if recipe ID or user changes

    const handleRatingSubmit = async (newRating) => {
        if (!isAuthenticated || !user?.id) {
            alert('Please log in to submit a rating.');
            return;
        }
        try {
            await submitRating(id, user.id, newRating);
            setUserRating(newRating);
            const { data: avgRate } = await fetchAverageRating(id); // Refresh average
            setAverageRating(avgRate);
            alert('Rating submitted successfully!');
        } catch (err) {
            console.error("Failed to submit rating:", err);
            alert(`Error submitting rating: ${err.message}`);
        }
    };

    const handleToggleFavorite = async () => {
        if (!isAuthenticated || !user?.id) {
            alert('Please log in to favorite a recipe.');
            return;
        }
        try {
            if (isFavorited) {
                await removeFavorite(id, user.id);
                setIsFavorited(false);
                alert('Recipe unfavorited!');
            } else {
                await addFavorite(id, user.id);
                setIsFavorited(true);
                alert('Recipe favorited!');
            }
        } catch (err) {
            console.error("Failed to toggle favorite:", err);
            alert(`Error toggling favorite: ${err.message}`);
        }
    };

    if (loading) return <div>Loading recipe...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!recipe) return <div>Recipe not found.</div>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image_url || recipe.image} alt={recipe.title} style={{ maxWidth: '300px' }} />
            <p>{recipe.description}</p>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Servings: {recipe.servings}</p>
            <p>Category: {Array.isArray(recipe.category) ? recipe.category.join(', ') : recipe.category}</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Diet Type: {recipe.diet_type}</p>
            <p>Tags: {Array.isArray(recipe.tags) ? recipe.tags.join(', ') : 'N/A'}</p>
            <p>Allergens: {Array.isArray(recipe.allergens_present) ? recipe.allergens_present.join(', ') : 'N/A'}</p>
            <p>Dietary Tags: {Array.isArray(recipe.dietary_tags) ? recipe.dietary_tags.join(', ') : 'N/A'}</p>
            <p>Unsuitable Conditions: {Array.isArray(recipe.unsuitable_conditions) ? recipe.unsuitable_conditions.join(', ') : 'N/A'}</p>

            {/* Rating Section */}
            <div>
                <h3>Ratings</h3>
                <p>Average Rating: {averageRating.average} ({averageRating.count} reviews)</p>
                {isAuthenticated && (
                    <div>
                        Your Rating: {userRating}
                        <button onClick={() => handleRatingSubmit(1)}>1</button>
                        <button onClick={() => handleRatingSubmit(3)}>3</button>
                        <button onClick={() => handleRatingSubmit(5)}>5</button>
                    </div>
                )}
            </div>

            {/* Favorite Section */}
            {isAuthenticated && (
                <button onClick={handleToggleFavorite}>
                    {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            )}
        </div>
    );
};

export default RecipeDetail;