import Tag from "./Tag";

class Search {
    constructor() {
        // Stores the ingredient tags used in the search.
        this.tagList = [];
        this.newTag = null;
    }

    // Sets the list of ingredients being searched.
    setTagList(tags) {
        this.tagList = tags.map((tag) => {
            if (tag instanceof Tag) {
                return tag;
            } else {
                return new Tag(tag);
            }
        });
    }

    // Adds a new tag if it does not already exist.
    addTag(name) {
        const newTag = new Tag(name);

        //checks each existing tag to see whether it equals the new tag.
        const alreadyExists = this.tagList.some(
            (tag) => tag.equals(newTag)
        );

        if (newTag.getName() !== "" && !alreadyExists) {
            this.tagList.push(newTag);
            this.newTag = newTag;
        } else {
            this.newTag = null;
        }

        return this.newTag;
    }


    // Returns all current tags.
    getTagList() {
        return this.tagList;
    }

    getResults(recipes) {
    // Store the active ingredient names.
        const activeTags = [];

        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].isActive()) {
                activeTags.push(this.tagList[i].getName());
            }
        }

        // If no ingredients are selected, return an empty list.
        if (activeTags.length === 0) {
            return [];
        }

        const results = [];

        // Check each recipe.
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            const ingredients = [];

            // Get the ingredients from the recipe.
            if (Array.isArray(recipe.ingredients)) {
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    ingredients.push(
                        String(recipe.ingredients[j]).trim().toLowerCase()
                    );
                }
            } else {
                // If the recipe has no ingredient list, use an empty list.
                ingredients.length = 0;
            }

            const matchedIngredients = [];
            const missingIngredients = [];

            // Check each recipe ingredient.
            for (let j = 0; j < ingredients.length; j++) {
                let found = false;

                // Check if the user has this ingredient.
                for (let k = 0; k < activeTags.length; k++) {
                    if (ingredients[j] === activeTags[k]) {
                        found = true;
                    }
                }

                // Separate matching and missing ingredients.
                if (found) {
                    matchedIngredients.push(ingredients[j]);
                } else {
                    missingIngredients.push(ingredients[j]);
                }
            }

            // Add recipes that have at least one matching ingredient.
            if (matchedIngredients.length > 0) {
                results.push({
                    ...recipe,
                    matchedIngredients: matchedIngredients,
                    missingIngredients: missingIngredients,
                    matchCount: matchedIngredients.length,
                    totalIngredients: ingredients.length
                });
            }
        }

        // Sort recipes so the ones with the most matches appear first.
        for (let i = 0; i < results.length; i++) {
            for (let j = i + 1; j < results.length; j++) {
                if (results[j].matchCount > results[i].matchCount) {
                    const temp = results[i];
                    results[i] = results[j];
                    results[j] = temp;
                }
            }
        }

        return results;
    }
}

export default Search;
