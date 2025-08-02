// src/pages/MyRecipesPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserRecipes, deleteUserRecipe } from '../api';
import RecipeCard from '../components/RecipeCard';
import '../styles/MyRecipesPage.css';

const MyRecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRecipes = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUserRecipes();
            setRecipes(response.data);
        } catch (err) {
            setError('Failed to fetch your recipes. Please try again.');
            console.error('Error fetching user recipes:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleDelete = async (recipeId) => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            try {
                await deleteUserRecipe(recipeId);
                fetchRecipes(); // Re-fetch recipes after deletion
            } catch (err) {
                setError('Failed to delete the recipe. Please try again.');
                console.error('Error deleting recipe:', err);
            }
        }
    };

    if (loading) {
        return <div className="loading-message">Loading your recipes...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="my-recipes-container">
            <h1 className="page-title">My Cookbook</h1>
            <div className="my-recipes-header">
                <p>{recipes.length} {recipes.length === 1 ? 'Recipe' : 'Recipes'}</p>
                <Link to="/add-recipe" className="add-recipe-button">
                    + Create New Recipe
                </Link>
            </div>
            {recipes.length > 0 ? (
                <div className="my-recipes-grid">
                    {recipes.map(recipe => (
                        <RecipeCard
                            key={recipe._id}
                            recipe={{
                                ...recipe,
                                image: recipe.imageUrl // Pass the imageUrl as the 'image' prop
                            }}
                            onDelete={handleDelete}
                            isUserRecipe={true}
                        />
                    ))}
                </div>
            ) : (
                <div className="no-recipes-message">
                    <p>You haven't added any recipes yet. Be the first to add one!</p>
                    <Link to="/add-recipe" className="add-recipe-link">
                        Create Your First Recipe
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyRecipesPage;
