class Recipe {
    constructor(username, recipeName, ingredients, instructions) {
        this.username = username;
        this.recipeName = recipeName;
        this.ingredients = [...ingredients];
        this.instructions = instructions;
    }

    getName() {
        return this.recipeName;
    }

    getUsername() {
        return this.username;
    }

    getIngredients() {
        return this.ingredients;
    }

    getInstructions() {
        return this.instructions;
    }

    setName(name) {
        this.recipeName = name;
    }

    setUsername(username) {
        this.username = username;
    }

    setInstructions(instructions) {
        this.instructions = instructions;
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    toJSON() {
        return {
            username: this.username,
            recipeName: this.recipeName,
            ingredients: this.ingredients,
            instructions: this.instructions
        };
    }
}

export default Recipe;
