// src/components/SearchBar.jsx

import React, { useState } from "react";

function SearchBar({ fetchRecipes }) {
  const [recipeName, setRecipeName] = useState("");

  const handleSearch = () => {
    if (recipeName.trim() !== "") {
      // Check if recipeName is not empty
      fetchRecipes(recipeName);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Search for recipes..."
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSearch} disabled={!recipeName.trim()}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
