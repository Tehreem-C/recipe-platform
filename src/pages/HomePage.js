// frontend/src/pages/HomePage.js
import React, { useState, useEffect, useMemo } from 'react';
import { getRecipes } from '../utils/dummyData';
import RecipeCard from '../components/RecipeCard';
import '../styles/HomePage.css'; // Assuming this imports HomePage-specific styles
import '../styles/RecipeCard.css'; // Assuming this imports RecipeCard-specific styles
import '../styles/App.css'; // Make sure App.css is imported somewhere to apply global styles including new input/card styles
import { getUserRecipes } from '../api'; // NEW: Import getUserRecipes for user-added recipes

const HomePage = () => {
    // State to hold the combined list of dummy and user-added recipes
    const [combinedAllRecipes, setCombinedAllRecipes] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const fetchAndCombineRecipes = async () => {
            setLoading(true);
            try {
                const dummyDataRecipes = getRecipes(); // Get your existing dummy data
                const userRecipesResponse = await getUserRecipes(); // Fetch from localStorage via simulated API
                // Ensure userSavedRecipes is an array, default to empty if null/undefined
                const userSavedRecipes = userRecipesResponse.data || [];

                // Combine dummy recipes and user-saved recipes
                // Filter out user-saved recipes that might have the same _id as a dummy recipe
                // (though with our `user_rec_` ID generation, this is unlikely to happen with dummy data)
                const combined = [
                    ...dummyDataRecipes,
                    ...userSavedRecipes.filter(userRec =>
                        !dummyDataRecipes.some(dummyRec => dummyRec._id === userRec._id || dummyRec.id === userRec._id)
                    )
                ];
                setCombinedAllRecipes(combined);
            } catch (error) {
                console.error("Error fetching and combining recipes:", error);
                // Optionally set an error state to display to the user if needed
            } finally {
                setLoading(false);
            }
        };

        fetchAndCombineRecipes();
    }, []); // Run this effect only once on component mount to load all recipes

    // 'allRecipes' now refers to the dynamically combined list
    const allRecipes = useMemo(() => combinedAllRecipes, [combinedAllRecipes]);

    const [searchTerm, setSearchTerm] = useState('');
    const [ingredientsInput, setIngredientsInput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');
    const [selectedDiet, setSelectedDiet] = useState('');

    // Derive unique filter options from the combined recipe list's tags
    const allTags = useMemo(() => {
        const tagsSet = new Set();
        allRecipes.forEach(recipe => {
            // Add check for recipe.tags existence and if it's an array
            if (recipe.tags && Array.isArray(recipe.tags)) {
                recipe.tags.forEach(tag => {
                    // Check if tag is a string before converting to lowercase
                    if (typeof tag === 'string') {
                        tagsSet.add(tag.toLowerCase());
                    }
                });
            }
        });
        return Array.from(tagsSet).sort();
    }, [allRecipes]); // Dependency on allRecipes ensures this updates when combinedAllRecipes changes

    // Separate common categories, cuisines, and diets based on tags
    // These lists will now include tags from both dummy and user-added recipes
    const categories = useMemo(() => {
        const commonCategories = new Set(['main course', 'appetizer', 'side dish', 'dessert', 'breakfast', 'snack', 'soup', 'salad', 'baking', 'stew', 'burgers', 'grilled']);
        // Filter based on `allTags` which now contains tags from all recipes
        const filtered = Array.from(allTags.filter(tag => commonCategories.has(tag))).sort();
        // Add 'Other' option if not already present, for tags not explicitly categorized
        return [...filtered, 'Other'];
    }, [allTags]);

    const cuisines = useMemo(() => {
        const commonCuisines = new Set(['italian', 'asian', 'pakistani', 'indian', 'chinese', 'mediterranean', 'pashtun', 'american', 'thai', 'french', 'vietnamese', 'korean', 'middle eastern', 'ethiopian']); // Expanded list
        const filtered = Array.from(allTags.filter(tag => commonCuisines.has(tag))).sort();
        return [...filtered, 'Other'];
    }, [allTags]);

    const diets = useMemo(() => {
        const commonDiets = new Set(['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'keto', 'paleo', 'low-carb', 'nut-free', 'pescatarian', 'high-protein', 'low-sugar', 'healthy', 'comfort food', 'spicy', 'quick & easy']); // Expanded list
        const filtered = Array.from(allTags.filter(tag => commonDiets.has(tag))).sort();
        return [...filtered, 'Other'];
    }, [allTags]);


    // Combined filtering logic for displayed recipes
    const filteredRecipes = useMemo(() => {
        let currentRecipes = allRecipes; // Start with the combined list of all recipes

        // 1. Filter by Search Term (Title/Description/Tags)
        if (searchTerm.trim()) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            currentRecipes = currentRecipes.filter(recipe => {
                // Ensure recipe.title, recipe.description, and recipe.tags are strings/arrays before calling toLowerCase() or some()
                const titleMatches = typeof recipe.title === 'string' && recipe.title.toLowerCase().includes(lowerCaseSearchTerm);
                const descriptionMatches = typeof recipe.description === 'string' && recipe.description.toLowerCase().includes(lowerCaseSearchTerm);
                const tagsMatch = recipe.tags && Array.isArray(recipe.tags) && recipe.tags.some(tag => typeof tag === 'string' && tag.toLowerCase().includes(lowerCaseSearchTerm));
                
                return titleMatches || descriptionMatches || tagsMatch;
            });
        }

        // 2. Filter by Ingredients Input (matches against title, description, or tags)
        if (ingredientsInput.trim()) {
            const searchTerms = ingredientsInput
                .toLowerCase()
                .split(',')
                .map(term => term.trim())
                .filter(term => term !== ''); // Clean and split input

            if (searchTerms.length > 0) {
                currentRecipes = currentRecipes.filter(recipe => {
                    return searchTerms.some(term =>
                        (typeof recipe.title === 'string' && recipe.title.toLowerCase().includes(term)) ||
                        (typeof recipe.description === 'string' && recipe.description.toLowerCase().includes(term)) ||
                        (recipe.ingredients && Array.isArray(recipe.ingredients) && recipe.ingredients.some(ing => typeof ing.name === 'string' && ing.name.toLowerCase().includes(term))) || // Check ingredients array and ing.name
                        (recipe.tags && Array.isArray(recipe.tags) && recipe.tags.some(tag => typeof tag === 'string' && tag.toLowerCase().includes(term)))
                    );
                });
            }
        }

        // 3. Filter by Category
        if (selectedCategory) {
            currentRecipes = currentRecipes.filter(recipe => {
                // Add defensive checks for recipe.tags
                if (!recipe.tags || !Array.isArray(recipe.tags)) {
                    return false; // If tags are missing or not an array, this recipe cannot match a category
                }
                
                if (selectedCategory === 'Other') {
                    // Match recipes whose tags are NOT in the predefined categories
                    return !recipe.tags.some(tag => typeof tag === 'string' && categories.includes(tag.toLowerCase()) && tag.toLowerCase() !== 'other');
                }
                return recipe.tags.some(tag => typeof tag === 'string' && tag.toLowerCase() === selectedCategory.toLowerCase());
            });
        }

        // 4. Filter by Cuisine
        if (selectedCuisine) {
            currentRecipes = currentRecipes.filter(recipe => {
                // Add defensive checks for recipe.tags
                if (!recipe.tags || !Array.isArray(recipe.tags)) {
                    return false; // If tags are missing or not an array, this recipe cannot match a cuisine
                }

                if (selectedCuisine === 'Other') {
                    return !recipe.tags.some(tag => typeof tag === 'string' && cuisines.includes(tag.toLowerCase()) && tag.toLowerCase() !== 'other');
                }
                return recipe.tags.some(tag => typeof tag === 'string' && tag.toLowerCase() === selectedCuisine.toLowerCase());
            });
        }

        // 5. Filter by Diet
        if (selectedDiet) {
            currentRecipes = currentRecipes.filter(recipe => {
                // Add defensive checks for recipe.tags
                if (!recipe.tags || !Array.isArray(recipe.tags)) {
                    return false; // If tags are missing or not an array, this recipe cannot match a diet
                }

                if (selectedDiet === 'Other') {
                    return !recipe.tags.some(tag => typeof tag === 'string' && diets.includes(tag.toLowerCase()) && tag.toLowerCase() !== 'other');
                }
                return recipe.tags.some(tag => typeof tag === 'string' && tag.toLowerCase() === selectedDiet.toLowerCase());
            });
        }

        return currentRecipes;
    }, [allRecipes, searchTerm, ingredientsInput, selectedCategory, selectedCuisine, selectedDiet, categories, cuisines, diets]); // Added filter lists to dependencies

    // Render loading message if recipes are still being fetched
    if (loading) {
        return <div className="loading-message">Loading recipes...</div>;
    }

    return (
        <div className="home-page-container">
            <h1 className="main-heading">Discover Delicious Recipes</h1>

            {/* Search and Filter Section */}
            <div className="search-filter-section">
                <input
                    type="text"
                    placeholder="Search recipes by title, description, or tags..."
                    className="search-input-lg"
                    aria-label="Search recipes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="filter-dropdown"
                    aria-label="Filter by category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>)}
                </select>
                <select
                    className="filter-dropdown"
                    aria-label="Filter by cuisine"
                    value={selectedCuisine}
                    onChange={(e) => setSelectedCuisine(e.target.value)}
                >
                    <option value="">All Cuisines</option>
                    {cuisines.map(cui => <option key={cui} value={cui}>{cui.charAt(0).toUpperCase() + cui.slice(1)}</option>)}
                </select>
                <select
                    className="filter-dropdown"
                    aria-label="Filter by dietary"
                    value={selectedDiet}
                    onChange={(e) => setSelectedDiet(e.target.value)}
                >
                    <option value="">All Diets</option>
                    {diets.map(diet => <option key={diet} value={diet}>{diet.charAt(0).toUpperCase() + diet.slice(1).replace(/-/g, ' ')}</option>)}
                </select>
            </div>

            {/* Find Recipes by Ingredients Section */}
            <div className="ingredients-search-card">
                <h2>Find Recipes with Your Ingredients</h2>
                <textarea
                    placeholder="Enter ingredients you have, separated by commas (e.g., chicken, broccoli, soy sauce)"
                    rows="3"
                    className="ingredients-textarea-lg"
                    aria-label="Enter your ingredients"
                    value={ingredientsInput}
                    onChange={(e) => setIngredientsInput(e.target.value)}
                ></textarea>
                <button
                    className="button-primary search-button-lg"
                    onClick={() => { /* No direct action needed, state change triggers re-filter */ }}
                >
                    Find Recipes
                </button>
            </div>

            <h2 className="section-heading">All Recipes</h2>

            <div className="recipe-list">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <RecipeCard key={recipe._id || recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <p className="no-recipes-message">No recipes found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;