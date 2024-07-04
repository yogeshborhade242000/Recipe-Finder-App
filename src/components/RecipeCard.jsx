// src/components/RecipeCard.jsx

import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, fetchRecipeDetails }) {
  const handleClick = () => {
    fetchRecipeDetails(recipe.id);
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
    </div>
  );
}

export default RecipeCard;
