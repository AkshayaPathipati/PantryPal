import React, { useEffect, useState } from "react";
import Upload from "./Upload.tsx";
import Search from "./Search";
import "./App.css";

function App() {
    // Stores recipes received from the backend.
    const [recipes, setRecipes] = useState([]);

    // Tracks loading and error messages.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Controls whether submitted recipes are visible.
    const [showRecipes, setShowRecipes] = useState(false);

    // Stores the ingredient currently being typed.
    const [ingredient, setIngredient] = useState("");

    // Stores the ingredients the user currently owns.
    const [ingredients, setIngredients] = useState([]);

    // Retrieves recipes from the backend.
    const fetchRecipes = () => {
        setLoading(true);
        setError("");

        fetch("https://pantrypal-sbeo.onrender.com/api/recipes", {
            cache: "no-store",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Server returned ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                setRecipes(data.recipes || []);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Loads recipes when the app first opens.
    useEffect(() => {
        fetchRecipes();
    }, []);

    // Searches for recipes matching the user's ingredients.
    const search = new Search();
    search.setTagList(ingredients);

    const matchedRecipes = search.getResults(recipes);

    // Adds an ingredient to the user's list.
    const addIngredient = () => {
        const newIngredient = ingredient.trim();

        if (newIngredient !== "") {
            setIngredients([...ingredients, newIngredient]);
            setIngredient("");
        }
    };

    // Allows the user to press Enter to add an ingredient.
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addIngredient();
        }
    };

    // Removes an ingredient from the user's list.
    const deleteIngredient = (indexToDelete) => {
        setIngredients(
            ingredients.filter(
                (_, index) => index !== indexToDelete
            )
        );
    };

    // Displays one recipe's matching ingredient information.
    const displayMatchDetails = (recipe) => (
        <>
            <p>
                You have {recipe.matchCount} out of{" "}
                {recipe.totalIngredients} ingredients.
            </p>

            <p>
                <strong>Ingredients you have:</strong>{" "}
                {recipe.matchedIngredients.join(", ")}
            </p>

            <p>
                <strong>Ingredients you need:</strong>{" "}
                {recipe.missingIngredients.length > 0
                    ? recipe.missingIngredients.join(", ")
                    : "None! You have everything listed."}
            </p>
        </>
    );

    return (
        <div className="app-container">
            {/* Main page heading */}
            <h1>PantryPal</h1>

            {/* Recipe upload section */}
            <h2>Upload Recipe: </h2>

            <Upload onRecipeSubmitted={fetchRecipes} />

            {/* Submitted recipes section */}
            <h2>Submitted Recipes:</h2>

            <button
                type="button"
                onClick={() => setShowRecipes(!showRecipes)}
            >
                {showRecipes
                    ? "Hide Submitted Recipes"
                    : "Show Submitted Recipes"}
            </button>

            {showRecipes && (
                <>
                    {loading && <p>Loading recipes...</p>}

                    {error && <p>Error: {error}</p>}

                    {!loading && !error && recipes.length === 0 && (
                        <p>No recipes have been submitted.</p>
                    )}

                    {!loading && !error && recipes.map((recipe) => (
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

                            {/* Displays an image if one is available. */}
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
                        </div>
                    ))}
                </>
            )}

            {/* User's available ingredients section */}
            <h2>What ingredients do you currently own?</h2>

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

            <h4>Your Ingredients:</h4>

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

            {/* Recipe matching section */}
            <h2>Recipes You Can Make:</h2>

            {ingredients.length === 0 ? (
                <p>Add ingredients above to find matching recipes.</p>
            ) : matchedRecipes.length === 0 ? (
                <p>No recipes match your ingredients yet.</p>
            ) : (
                matchedRecipes.map((recipe) => (
                    <div className="recipe-card" key={recipe._id}>
                        <h3>{recipe.recipeName}</h3>

                        {displayMatchDetails(recipe)}
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
