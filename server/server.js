//web app needs express to handle requests and responses
const express = require('express');
//for database connection
const mongoose = require('mongoose');
//for handling cross-origin requests, so when the frontend and backend are on different ports, 
//the frontend can still make requests to the backend
const cors = require('cors');
//path to sharedRecipe, the schema
const sharedRecipe = require('./sharedRecipe');

//set up for express framework
//new instance of an express application, has everythign for routing HTTP requests, listening 
// =to a port, and configuring servers
const app = express();
//translates the .json file to something that JS/TS code can understand 
app.use(express.json());
//connecting the frontend and backend, so that the frontend can make requests to the backend
app.use(cors());

mongoose.connect('mongodb://localhost:27017/pantrypal').then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.post('/api/share', async (req, res) => {
    try {
        const { username, recipeName } = req.body;

        const userExists = await sharedRecipe.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newSharedRecipe = new sharedRecipe({ username, recipeName });

        await newSharedRecipe.save();
        res.status(201).json({ message: 'Recipe shared successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(5000, () => { console.log('Server is running on port 5000'); });