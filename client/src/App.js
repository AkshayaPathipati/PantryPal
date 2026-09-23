import React, { useEffect, useState } from 'react';
import Upload from "./Upload.tsx";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("https://pantrypal-sbeo.onrender.com/api/recipes").then( //http://localhost:5000/api/recipes
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    ) //This is a simple fetch request to get all recipes from the backend
  }, [])

  return (
    <div>
      <h1>PantryPal</h1>

      <Upload />

      <h2>Submitted Recipes</h2>

      {loading && <p>Loading recipes...</p>}

      {error && <p>Failed to load recipes: {error}</p>}

      {!loading && !error && recipes.length === 0 && (
        <p>No recipes have been submitted.</p>
      )}

      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.recipeName}</h3>
          <p>Submitted by: {recipe.username}</p>
        </div>
      ))}
    </div>
  );

}

export default App