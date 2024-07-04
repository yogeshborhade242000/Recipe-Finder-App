import React from "react";

function RecipeDetails({ recipe, setSelectedRecipe }) {
  return (
    <div className="recipe-details">
      <button onClick={() => setSelectedRecipe(null)}>Back</button>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
