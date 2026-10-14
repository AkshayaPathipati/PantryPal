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
  // ************************* Adding code for user to imput their Ingredients
  // Stores the ingredient the user is currently typing.
  const [ingredient, setIngredient] = useState("");

  // Stores the list of ingredients the user has added.
  const [ingredients, setIngredients] = useState([]);

  // Adds an ingredient to the list.
  const addIngredient = () => {
    // Check that the input is not empty or just spaces.
    if (ingredient.trim() !== "") {
      // Add the new ingredient to the existing list.
      setIngredients([...ingredients, ingredient.trim()]);

      // Clear the input after adding the ingredient.
      setIngredient("");
    }
  };

  // Allows the user to press keyboard "Enter" to add an ingredient.
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addIngredient();
    }
  };

  // Removes an ingredient from the list.
  const deleteIngredient = (indexToDelete) => {
    setIngredients(
      ingredients.filter((_, index) => index !== indexToDelete)
    );
  };

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
              <p>{recipe.instructions}</p>

              {recipe.image && (
                <div>
                  <h4>Picture:</h4>
                  <img
                    src={recipe.image}
                    alt={recipe.recipeName}
                    width="300"
                  />
                </div>
              )}

              <hr />

            </div>
          ))}
        </>
      )}

      {/* ********************************Adding promt for user to imput their ingredients */}
      <h2>What ingredients do you currently own?</h2>

      {/*
        The user can type an ingredient here.
        Pressing Enter or clicking Add adds it to the list.
      */}
      <input
        type="text"
        placeholder="Enter an ingredient"
        value={ingredient}
        onChange={(event) => setIngredient(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button type="button" onClick={addIngredient}>
        Add
      </button>

      <h3>Your Ingredients:</h3>

      {/*
        Displays all ingredients currently entered by the user in list format.
        Each ingredient has its own Delete button.
      */}
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item}

            <button
              type="button"
              onClick={() => deleteIngredient(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* ************************************ */}

    </div>
  );
}

export default App;