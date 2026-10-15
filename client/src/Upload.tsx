import * as React from "react";
import Recipe from "./Recipe.js";

function Upload({ onRecipeSubmitted, }: { onRecipeSubmitted: () => void; }) {
    const [username, setUsername] = React.useState("");
    const [recipeName, setRecipeName] = React.useState("");
    const [instructions, setInstructions] = React.useState("");

    // Stores the ingredient currently being typed.
    const [ingredient, setIngredient] = React.useState("");

    // Stores the ingredients added to this recipe.
    const [ingredients, setIngredients] = React.useState<string[]>([]);

    // Updates the matching form field when the user types.
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.currentTarget;

        if (name === "username") {
            setUsername(value);
        } else if (name === "recipeName") {
            setRecipeName(value);
        } else if (name === "instructions") {
            setInstructions(value);
        }
    };

    // Adds an ingredient to the recipe.
    const addIngredient = () => {
        const newIngredient = ingredient.trim();

        if (newIngredient !== "") {
            setIngredients([...ingredients, newIngredient]);
            setIngredient("");
        }
    };

    // Allows Enter to add an ingredient without submitting the form.
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addIngredient();
        }
    };

    // Removes an ingredient from the recipe.
    const deleteIngredient = (indexToDelete: number) => {
        setIngredients(
            ingredients.filter((_, index) => index !== indexToDelete)
        );
    };

    // Clears the form after a successful submission.
    const resetForm = () => {
        setUsername("");
        setRecipeName("");
        setInstructions("");
        setIngredients([]);
        setIngredient("");
    };

    // Sends the recipe to the backend.
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (ingredients.length === 0) {
            alert("Please add at least one ingredient.");
            return;
        }

        try {
            const recipe = new Recipe(
                username,
                recipeName,
                ingredients,
                instructions
            );

            const response = await fetch(
                "https://pantrypal-sbeo.onrender.com/api/recipes",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(recipe),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to submit recipe."
                );
            }

            alert("Successfully submitted recipe!");

            resetForm();

            // Refreshes the submitted recipes in App.js.
            onRecipeSubmitted();
        } catch (error) {
            console.error("Error submitting recipe:", error);

            const message =
                error instanceof Error
                    ? error.message
                    : "An unexpected error occurred.";

            alert("Failed to submit recipe: " + message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="col-auto">
                {/* Username input */}
                <label>Username:</label>

                <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter Username..."
                    value={username}
                    onChange={handleChange}
                    required
                />

                <br />

                {/* Recipe name input */}
                <label>Recipe Name:</label>

                <input
                    type="text"
                    name="recipeName"
                    className="form-control"
                    placeholder="Enter Recipe Name..."
                    value={recipeName}
                    onChange={handleChange}
                    required
                />

                <br />

                {/* Ingredient input */}
                <label>Recipe Ingredients:</label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Ingredient..."
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button type="button" onClick={addIngredient}>
                    Add
                </button>

                {/* Displays the ingredients in the recipe. */}
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

                {/* Recipe instructions */}
                <label>Instructions:</label>

                <br />

                <textarea
                    name="instructions"
                    className="form-control"
                    placeholder="Enter Instructions..."
                    value={instructions}
                    onChange={handleChange}
                    rows={3}
                    required
                />

                <br />

                {/* Submits the completed recipe. */}
                <button type="submit" className="btn btn-primary">
                    Submit Recipe :D
                </button>
            </div>
        </form>
    );
}

export default Upload;
