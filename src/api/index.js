// /src/api/index.js
// This file uses local storage and dummy data for all API simulations.
import { recipes as DUMMY_RECIPES } from '../utils/dummyData';

// --- Simulated Auth Functions (using localStorage) ---
export const registerUser = async (userData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const users = JSON.parse(localStorage.getItem('dummyUsers') || '[]');
    if (users.find(u => u.email === userData.email || u.username === userData.username)) {
        throw new Error('User with that email or username already exists.');
    }
    const newUser = { id: Date.now().toString(), ...userData };
    users.push(newUser);
    localStorage.setItem('dummyUsers', JSON.stringify(users));
    localStorage.setItem('token', 'dummy-token-' + newUser.id);
    localStorage.setItem('currentUser', JSON.stringify({ id: newUser.id, username: newUser.username, email: newUser.email }));
    return { data: { token: 'dummy-token-' + newUser.id, user: { id: newUser.id, username: newUser.username, email: newUser.email } } };
};

export const loginUser = async (credentials) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const users = JSON.parse(localStorage.getItem('dummyUsers') || '[]');
    const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
    if (!user) {
        throw new Error('Invalid credentials.');
    }
    localStorage.setItem('token', 'dummy-token-' + user.id);
    localStorage.setItem('currentUser', JSON.stringify({ id: user.id, username: user.username, email: user.email }));
    return { data: { token: 'dummy-token-' + user.id, user: { id: user.id, username: user.username, email: user.email } } };
};

export const verifyUserToken = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const token = localStorage.getItem('token');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (token && currentUser) {
        return { data: { user: currentUser } };
    }
    throw new Error('No valid token found.');
};

// --- Simulated Recipe Functions (using dummyData and localStorage) ---
export const getAllRecipes = async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    let filteredRecipes = [...DUMMY_RECIPES];
    if (params.search) {
        const searchTerm = params.search.toLowerCase();
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm) ||
            (recipe.description && recipe.description.toLowerCase().includes(searchTerm)) ||
            (recipe.ingredients && recipe.ingredients.some(ing => typeof ing === 'object' && ing.name && ing.name.toLowerCase().includes(searchTerm))) ||
            (recipe.category && recipe.category.some(cat => cat.toLowerCase().includes(searchTerm)))
        );
    }
    if (params.category && params.category !== 'All') {
        const categoryFilter = params.category.toLowerCase();
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.category && recipe.category.some(cat => cat.toLowerCase() === categoryFilter)
        );
    }
    if (params.difficulty && params.difficulty !== 'All') {
        const difficultyFilter = params.difficulty.toLowerCase();
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.difficulty && recipe.difficulty.toLowerCase() === difficultyFilter
        );
    }
    if (params.dietaryTags && params.dietaryTags !== 'All') {
        const dietaryTagFilter = params.dietaryTags.toLowerCase();
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.dietaryTags && recipe.dietaryTags.some(tag => tag.toLowerCase() === dietaryTagFilter)
        );
    }
    return { data: filteredRecipes };
};

export const getRecipeById = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const recipe = DUMMY_RECIPES.find(r => r._id === id);
    if (!recipe) {
        throw new Error('Recipe not found.');
    }
    return { data: recipe };
};

export const saveRecipe = async (recipeData) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        throw new Error('User not logged in.');
    }
    const userSavedRecipes = JSON.parse(localStorage.getItem(`userRecipes_${currentUser.id}`) || '[]');
    let newRecipe;
    if (recipeData._id && recipeData._id.startsWith('user_rec_')) {
        const index = userSavedRecipes.findIndex(r => r._id === recipeData._id);
        if (index > -1) {
            newRecipe = { ...userSavedRecipes[index], ...recipeData, updatedAt: new Date().toISOString() };
            userSavedRecipes[index] = newRecipe;
        } else {
            newRecipe = {
                ...recipeData,
                _id: `user_rec_${Date.now()}`,
                createdBy: currentUser.id,
                isUserSubmitted: true,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            userSavedRecipes.push(newRecipe);
        }
    } else {
        newRecipe = {
            ...recipeData,
            _id: `user_rec_${Date.now()}`,
            createdBy: currentUser.id,
            isUserSubmitted: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        userSavedRecipes.push(newRecipe);
    }
    localStorage.setItem(`userRecipes_${currentUser.id}`, JSON.stringify(userSavedRecipes));
    return { data: newRecipe };
};

export const getUserRecipes = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        console.log('API: getUserRecipes called but no currentUser found. Returning empty array.');
        return { data: [] };
    }
    const userRecipes = JSON.parse(localStorage.getItem(`userRecipes_${currentUser.id}`) || '[]');
    console.log(`API: Found ${userRecipes.length} recipes for user ${currentUser.id}.`);
    return { data: userRecipes };
};

export const deleteUserRecipe = async (recipeId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        throw new Error('User not logged in.');
    }
    let userSavedRecipes = JSON.parse(localStorage.getItem(`userRecipes_${currentUser.id}`) || '[]');
    const initialLength = userSavedRecipes.length;
    userSavedRecipes = userSavedRecipes.filter(recipe => recipe._id !== recipeId);
    if (userSavedRecipes.length === initialLength) {
        throw new Error('Recipe not found or not owned by user.');
    }
    localStorage.setItem(`userRecipes_${currentUser.id}`, JSON.stringify(userSavedRecipes));
    return { data: { message: 'Recipe deleted successfully.' } };
};

// --- Simulated Favorites API Functions (using localStorage) ---
const getFavoriteRecipesStore = (userId) => {
    const key = `userFavorites_${userId}`;
    return JSON.parse(localStorage.getItem(key) || '[]');
};

const setFavoriteRecipesStore = (userId, favorites) => {
    const key = `userFavorites_${userId}`;
    localStorage.setItem(key, JSON.stringify(favorites));
};

export const addFavorite = async (recipeId, userId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (!userId) throw new Error("User not authenticated.");
    const favorites = getFavoriteRecipesStore(userId);
    if (!favorites.includes(recipeId)) {
        favorites.push(recipeId);
        setFavoriteRecipesStore(userId, favorites);
    }
    return { data: { success: true, message: "Recipe favorited." } };
};

export const removeFavorite = async (recipeId, userId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (!userId) throw new Error("User not authenticated.");
    let favorites = getFavoriteRecipesStore(userId);
    favorites = favorites.filter(id => id !== recipeId);
    setFavoriteRecipesStore(userId, favorites);
    return { data: { success: true, message: "Recipe unfavorited." } };
};

export const fetchUserFavorites = async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (!userId) return { data: [] };
    const favorites = getFavoriteRecipesStore(userId);
    return { data: favorites };
};

export const fetchFavoriteRecipesDetails = async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (!userId) return { data: [] };
    const favoriteIds = getFavoriteRecipesStore(userId);
    const dummyRecipes = DUMMY_RECIPES;
    const userRecipesResponse = await getUserRecipes();
    const userAddedRecipes = userRecipesResponse.data || [];
    const allCombinedRecipes = [
        ...dummyRecipes,
        ...userAddedRecipes.filter(userRec =>
            !dummyRecipes.some(dummyRec => (dummyRec._id === userRec._id || dummyRec.id === userRec._id))
        )
    ];
    const favoritedRecipes = allCombinedRecipes.filter(recipe => {
        const recipeUniqueId = recipe._id || recipe.id;
        return favoriteIds.includes(recipeUniqueId);
    });
    return { data: favoritedRecipes };
};

// --- Simulated Rating API Functions (using localStorage) ---
const getAllRecipeRatings = () => {
    return JSON.parse(localStorage.getItem('allRecipeRatings') || '{}');
};

const setAllRecipeRatings = (allRatings) => {
    localStorage.setItem('allRecipeRatings', JSON.stringify(allRatings));
};

export const submitRating = async (recipeId, userId, rating) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (!userId) throw new Error("User not authenticated to submit rating.");
    if (rating < 1 || rating > 5) throw new Error("Rating must be between 1 and 5.");
    const allRatings = getAllRecipeRatings();
    const currentRecipeRatings = allRatings[recipeId] || [];
    const existingRatingIndex = currentRecipeRatings.findIndex(r => r.userId === userId);
    if (existingRatingIndex > -1) {
        currentRecipeRatings[existingRatingIndex].rating = rating;
    } else {
        currentRecipeRatings.push({ userId, rating });
    }
    allRatings[recipeId] = currentRecipeRatings;
    setAllRecipeRatings(allRatings);
    return { data: { success: true, message: "Rating submitted." } };
};

export const fetchAverageRating = async (recipeId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const allRatings = getAllRecipeRatings();
    const currentRecipeRatings = allRatings[recipeId] || [];
    if (currentRecipeRatings.length === 0) {
        return { data: { average: 0, count: 0 } };
    }
    const sum = currentRecipeRatings.reduce((acc, curr) => acc + curr.rating, 0);
    const average = sum / currentRecipeRatings.length;
    return { data: { average: parseFloat(average.toFixed(1)), count: currentRecipeRatings.length } };
};

export const fetchUserRating = async (recipeId, userId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (!userId) return { data: { rating: 0 } };
    const allRatings = getAllRecipeRatings();
    const currentRecipeRatings = allRatings[recipeId] || [];
    const userRating = currentRecipeRatings.find(r => r.userId === userId);
    return { data: { rating: userRating ? userRating.rating : 0 } };
};

// --- Simulated Health Profile API Functions (using localStorage) ---
const getUserHealthProfilesStore = () => {
    const profiles = JSON.parse(localStorage.getItem('userHealthProfiles') || '{}');
    return profiles;
};

const setUserHealthProfilesStore = (profiles) => {
    localStorage.setItem('userHealthProfiles', JSON.stringify(profiles));
};

export const getUserHealthProfile = async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (!userId) return null;
    const allProfiles = getUserHealthProfilesStore();
    const userProfile = allProfiles[userId] || null;
    return userProfile;
};

export const saveUserHealthProfile = async (profileData) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        throw new Error('User not authenticated.');
    }
    const userId = currentUser.id;
    const allProfiles = getUserHealthProfilesStore();
    const newProfile = {
        ...profileData,
        user_id: userId,
        updatedAt: new Date().toISOString()
    };
    allProfiles[userId] = newProfile;
    setUserHealthProfilesStore(allProfiles);
    return { success: true, data: newProfile };
};
