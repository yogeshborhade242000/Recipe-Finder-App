import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import "./index.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchMade, setSearchMade] = useState(false);

  const fetchRecipes = async (query) => {
    setLoading(true);
    setError(null);
    setSearchMade(true);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=d8258bd23e424095b4d84b0e1579285d`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeDetails = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=d8258bd23e424095b4d84b0e1579285d`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSelectedRecipe(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Recipe Finder</h1>
      <div className="container">
        <SearchBar fetchRecipes={fetchRecipes} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {selectedRecipe ? (
          <RecipeDetails
            recipe={selectedRecipe}
            setSelectedRecipe={setSelectedRecipe}
          />
        ) : (
          <RecipeList
            recipes={recipes}
            fetchRecipeDetails={fetchRecipeDetails}
            searchMade={searchMade}
          />
        )}
      </div>
    </div>
  );
}

export default App;
