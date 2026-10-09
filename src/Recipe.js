class Recipe
{
  constructor(recipeName, username, dateUploaded, ingredients, instructions) 
  {
    this.recipeName = recipeName;
    this.username = username;
    this.dateUploaded = dateUploaded;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  getRecipeName() {}

  getUsername() {}

  getDateUploaded(){}

}

export default Recipe;