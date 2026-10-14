import React, { useEffect, useState } from 'react';
import Upload from "./Upload.tsx";
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showRecipes, setShowRecipes] = useState(false);

  // const [backendData, setBackendData] = useState([{}]);

  const fetchRecipes = () => {
    setLoading(true);
    setError("");
    fetch("https://pantrypal-sbeo.onrender.com/api/recipes", {
      // http://localhost:5000/api/recipes
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log("Backend response:", data);
        setRecipes(data.recipes || []);
        // setBackendData(data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  // ***************************

  return (
    <div className="app-container">
      <h1>PantryPal</h1>
      <h2>Upload Recipe</h2>

      <Upload onRecipeSubmitted={fetchRecipes} />

      <h2>Submitted Recipes</h2>
      <button
        type="button"
        onClick={() => setShowRecipes(!showRecipes)}
      >
        {showRecipes ? "Hide Submitted Recipes" : "Show Submitted Recipes"}
      </button>

      {showRecipes && (
        <>
          {loading && <p>Loading recipes...</p>}

          {error && <p>Error: {error}</p>}

          {!loading && !error && recipes.length === 0 && (
            <p>No recipes have been submitted.</p>
          )}

          {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>

              <h3>{recipe.recipeName}</h3>

              <p>Submitted by: {recipe.username}</p>

              <h4>Ingredients:</h4>
              <ul>
                {Array.isArray(recipe.ingredients) &&
                  recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>

              <h4>Instructions:</h4>
              <ol>
                {Array.isArray(recipe.instructions) &&
                  recipe.instructions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ol>

            </div>
          ))}
        </>
      )}

    </div>
  );
}

export default App;

