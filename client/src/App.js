import React, { useEffect, useState } from 'react';
import Upload from "./Upload.tsx";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //const [backendData, setBackendData] = useState([{}])  

  useEffect(() => {
    fetch("https://pantrypal-sbeo.onrender.com/api/recipes", { //http://localhost:5000/api/recipes
      cache:"no-store",
    }).then(response => {
      if (!response.ok) throw new Error(`Server returned ${response.status}`);

      return response.json()
    }).then(data => {
      console.log("Backend response:", data);
      setRecipes(data.recipes || []);
      //setBackendData(data)
    }).catch(error => {
      console.error("Error fetching recipes:", error);
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }, [])

  return (
    <div>
      <h1>PantryPal</h1>

      <Upload />

      <h2>Submitted Recipes</h2>

      {loading && <p>Loading recipes...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && recipes.length === 0 && (
        <p>No recipes have been submitted.</p>
      )}

      {[...recipes].reverse.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.recipeName}</h3>
          <p>Submitted by: {recipe.username}</p>
        </div>
      ))}
    </div>
  );

}

export default App
