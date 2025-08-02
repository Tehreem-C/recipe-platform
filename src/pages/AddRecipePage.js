// frontend/src/pages/AddRecipe.js
import React from "react";
// Adjust the import path for the CSS file, assuming it's in src/styles/
import '../styles/AddRecipe.css'; 

function AddRecipe() {
  // Note: This version does not include state management (useState) or API calls (handleSubmit).
  // It's a pure presentation component based on the code you provided.
  // If you need the functionality (state, API, validation, navigation), we'll need to re-integrate those.

  return (
    <div className="container">
      <form className="recipe-form">
        <h2>Add New Recipe</h2>

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="Enter title" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" placeholder="Enter description"></textarea>

        <div className="time-servings">
          <div className="input-group">
            <label htmlFor="prepTime">Prep Time:</label>
            <input type="text" id="prepTime" name="prepTime" placeholder="e.g., 15m" />
          </div>

          <div className="input-group">
            <label htmlFor="cookTime">Cook Time:</label>
            <input type="text" id="cookTime" name="cookTime" placeholder="e.g., 30m" />
          </div>

          <div className="input-group">
            <label htmlFor="servings">Servings:</label>
            <input type="text" id="servings" name="servings" placeholder="e.g., 4" />
          </div>
        </div>

        <label htmlFor="tags">Tags (comma-separated):</label>
        <input
          type="text"
          id="tags"
          name="tags"
          placeholder="e.g., Italian, Main Course, Vegetarian"
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="/assets/your-recipe-image.jpg"
        />

        <button type="submit" className="submit-btn">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;