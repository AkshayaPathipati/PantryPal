//mongoose ia a mongodb ODM library that acts as a traslator between TS/JS code and the monggodb database
const mongoose = require('mongoose');

//create a schema for the shared recipe collection in the database
const sharedRecipeSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    recipeName: { type: String, required: true }
});

//module.exports is used to export the SharedRecipe model so that it can be used in other files
module.exports = mongoose.model('SharedRecipe', sharedRecipeSchema);
//mongoose.model compiles the schema into a model, a class that has methods to interact with the database
