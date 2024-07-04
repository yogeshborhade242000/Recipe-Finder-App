import React from "react";

function RecipeList({ recipes, fetchRecipeDetails, searchMade }) {
  if (!searchMade) {
    return null;
  }

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="recipe-card"
          onClick={() => fetchRecipeDetails(recipe.id)}
        >
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
