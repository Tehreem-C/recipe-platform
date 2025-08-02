// frontend/src/pages/ModifyRecipePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/ModifyRecipePage.css'; // Import the dedicated CSS for this page
import { getRecipeById, saveRecipe } from '../api'; // IMPORT YOUR SIMULATED API FUNCTIONS

const ModifyRecipePage = () => {
  const { id } = useParams(); // Get the recipe ID from the URL if in edit mode
  const navigate = useNavigate();

  // State for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // ADDED: State for ingredients and instructions
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // To determine if adding or editing

  // Effect to load recipe data if in edit mode
  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      setLoading(true);
      // Use the simulated getRecipeById from your api/index.js
      getRecipeById(id)
        .then(response => {
          const data = response.data; // Access data from the simulated API response structure
          setTitle(data.title || '');
          setDescription(data.description || '');
          setPrepTime(data.prepTime || '');
          setCookTime(data.cookTime || '');
          setServings(data.servings || '');
          setTags(Array.isArray(data.tags) ? data.tags.join(', ') : '');
          setImageUrl(data.imageUrl || '');
          // ADDED: Set state for ingredients and instructions
          setIngredients(Array.isArray(data.ingredients) ? data.ingredients.map(ing => `${ing.quantity} ${ing.name}`).join('\n') : '');
          setInstructions(data.instructions || '');
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to load recipe:", err);
          setLocalError('Failed to load recipe for editing. ' + err.message);
          setLoading(false);
          // Optionally redirect if recipe not found or error
          // navigate('/not-found');
        });
    } else {
      setIsEditMode(false);
      // Clear form fields when switching to add mode (if navigating from edit)
      setTitle('');
      setDescription('');
      setPrepTime('');
      setCookTime('');
      setServings('');
      setTags('');
      setImageUrl('');
      // ADDED: Clear ingredients and instructions fields
      setIngredients('');
      setInstructions('');
      setLocalError(''); // Clear errors when switching modes
    }
  }, [id, navigate]); // Added navigate to dependency array

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    setLoading(true);

    // Basic client-side validation
    if (!title || !description || !prepTime || !cookTime || !servings || !imageUrl || !ingredients || !instructions) {
      setLocalError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    // Validate servings as a positive number
    const servingsInt = parseInt(servings, 10);
    if (isNaN(servingsInt) || servingsInt <= 0) {
      setLocalError('Servings must be a positive number.');
      setLoading(false);
      return;
    }

    // Parse ingredients from the string input
    const parsedIngredients = ingredients.split('\n').map(item => {
      const parts = item.trim().split(' ');
      const quantity = parts.length > 1 ? parts.shift() : '1'; // Assuming the first part is quantity
      const name = parts.join(' ').trim();
      return { name, quantity };
    }).filter(item => item.name); // Filter out any empty lines

    const recipeData = {
      // If editing, include the ID so saveRecipe knows to update
      ...(isEditMode && { _id: id }),
      title,
      description,
      prepTime,
      cookTime,
      servings: servingsInt, // Use the parsed integer
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      imageUrl,
      // ADDED: Add ingredients and instructions to the data object
      ingredients: parsedIngredients,
      instructions,
      // Add other fields like userId, createdAt, etc. if your simulated API expects them
      // The saveRecipe function in api/index.js already handles _id generation for new recipes
    };

    try {
      // Use the simulated saveRecipe from your api/index.js
      const response = await saveRecipe(recipeData);
      console.log(`Recipe ${isEditMode ? 'updated' : 'added'} successfully!`, response.data);
      navigate('/my-recipes'); // Redirect to 'My Cookbook' page after success
    } catch (error) {
      console.error(`Error ${isEditMode ? 'updating' : 'adding'} recipe:`, error);
      setLocalError(error.message); // Display the error message to the user
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="container"> {/* Outer container for centering and background */}
      <form className="recipe-form" onSubmit={handleSubmit}> {/* Form container */}
        <h2>{isEditMode ? 'Edit Recipe' : 'Add New Recipe'}</h2> {/* Dynamic title */}

        {localError && ( // Display error messages
          <div className="error-message">
            {localError}
          </div>
        )}

        {/* Title Input */}
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Description Textarea */}
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        {/* Time and Servings Group (Horizontal Layout) */}
        <div className="time-servings">
          <div className="input-group">
            <label htmlFor="prepTime">Prep Time:</label>
            <input
              type="text"
              id="prepTime"
              name="prepTime"
              placeholder="e.g., 15m"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="cookTime">Cook Time:</label>
            <input
              type="text"
              id="cookTime"
              name="cookTime"
              placeholder="e.g., 30m"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="servings">Servings:</label>
            <input
              type="number"
              id="servings"
              name="servings"
              placeholder="e.g., 4"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Tags Input */}
        <label htmlFor="tags">Tags (comma-separated):</label>
        <input
          type="text"
          id="tags"
          name="tags"
          placeholder="e.g., Italian, Main Course, Vegetarian"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        {/* Image URL Input */}
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Paste a public image URL here (e.g., from Unsplash)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        
        {/* Ingredients Textarea */}
        <label htmlFor="ingredients">Ingredients (one per line):</label>
        <textarea
          id="ingredients"
          name="ingredients"
          placeholder="e.g.,
10-15 fresh mint leaves
1 large lime
2 tbsp sugar"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>

        {/* Instructions Textarea */}
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          placeholder="Enter step-by-step instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? (isEditMode ? 'Updating...' : 'Adding...') : (isEditMode ? 'Update Recipe' : 'Add Recipe')}
        </button>
      </form>
    </div>
  );
};

export default ModifyRecipePage;
