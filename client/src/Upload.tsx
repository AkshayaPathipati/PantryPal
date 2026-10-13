import * as React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elementName: string]: any;
        }
    }
}

function Upload({ onRecipeSubmitted }: { onRecipeSubmitted: () => void }) {
    const [formData, setFormData] = React.useState({
        username: '',
        recipeName: '',
        ingredients: '',
        instructions: ''
    });

    // Stores the ingredient currently being typed
    const [ingredient, setIngredient] = React.useState('');

    // Stores the list of ingredients added by the user
    const [ingredients, setIngredients] = React.useState<string[]>([]);

    // Handles input from the user
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Adds an ingredient to the list
    const addIngredient = () => {
        const newIngredient = ingredient.trim();

        if (newIngredient !== '') {
            const updatedIngredients = [...ingredients, newIngredient];

            setIngredients(updatedIngredients);
            setFormData({
                ...formData,
                ingredients: updatedIngredients.join(', ')
            });

            setIngredient('');
        }
    };

    // Allows the user to press Enter to add an ingredient
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addIngredient();
        }
    };

    // Deletes an ingredient from the list
    const deleteIngredient = (index: number) => {
        const updatedIngredients = ingredients.filter(
            (_, i) => i !== index
        );

        setIngredients(updatedIngredients);
        setFormData({
            ...formData,
            ingredients: updatedIngredients.join(', ')
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (ingredients.length === 0) {
            alert('Please add at least one ingredient.');
            return;
        }

        try {
            // Sends the recipe data to the server
            const response = await fetch('https://pantrypal-sbeo.onrender.com/api/recipes', {
                // http://localhost:5000/api/recipes
                method: 'POST',

                // Tells the server that the data is formatted as JSON
                headers: { 'Content-Type': 'application/json' },

                // Converts the formData object into a JSON string
                body: JSON.stringify({
                        ...formData,
                        ingredients: ingredients,
                    }),
            });

            // Converts the server response into a JSON object
            const data = await response.json();

            if (response.ok) {
                alert('Successfully submitted recipe!');
                onRecipeSubmitted();

                // Clears the form after successfully submitting the recipe
                setFormData({
                    username: '',
                    recipeName: '',
                    ingredients: '',
                    instructions: ''
                });

                setIngredients([]);
                setIngredient('');
            }
            else {
                alert('Failed to submit recipe: ' + data.message);
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    //'col-auto' is a bootstrap class that makes the form responsive
    return (
        <form onSubmit={handleSubmit}>
            <div className="col-auto">

                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter Username..."
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <br></br>

                <label>Recipe Name: </label>
                <input
                    type="text"
                    name="recipeName"
                    className="form-control"
                    placeholder="Enter Recipe Name..."
                    value={formData.recipeName}
                    onChange={handleChange}
                    required
                />

                <br></br>

                {/* Allows the user to add ingredients one at a time */}
                <label>Recipe Ingredients:  </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ingredient..."
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button
                    type="button"
                    onClick={addIngredient}
                >
                    Add
                </button>

                {/* Displays all ingredients entered by the user */}
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

                {/* Allows the user to enter the instructions for the recipe */}
                <label>Instructions: </label>
                <br></br>
                <textarea
                    name="instructions"
                    className="form-control"
                    placeholder="Enter instructions..."
                    value={formData.instructions}
                    onChange={handleChange}
                    rows={3}
                    required
                />

                <br></br>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit Recipe :D
                </button>

            </div>
        </form>
    );
}

export default Upload;
