const path = require('path')


const express = require('express');
const cors = require('cors');

//database
const mongoose = require('mongoose');
require('dotenv').config({
    path: path.join(__dirname, ".env"),
});
//TODO: recipe model

const app = express();

app.use(cors({
    origin: [
        "http://localhost:3000", 
        "https://akshayapathipati.github.io",
    ],
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "You found the PantryPal backend. Enjoy your stay."
    });
})

//basically backedn api
/*
app.get("/api", (req, res) => {
    res.json({
        users: ["userOne", "userTwo", "userThree"]
    });
})
*/

const recipeSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    recipeName: {
      type: String,
      required: true,
      trim: true,
    },
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

app.post("/api/recipes", async (req, res) => {
    try{
        const {username, recipeName} = req.body;
        const recipe = await Recipe.create({
            username,
            recipeName,
        });

        let collection = db.collection("records");
        let result = await collection.insertOne(recipe);


        return res.status(201).json({
            message: "Recipe saved successfully",
            recipe,
        })
    }catch (error){
        console.log("save failed ", error);
        return res.status(500).json({
            message: "Recipe NOT saved successfully :(",
        })
    }
})

//fetch and display user array
const PORT = process.env.PORT || 5000;

// const mongoUri = process.env.MONGODB_URI;

// console.log("MongoDB URI loaded:", Boolean(mongoUri));

// if (!mongoUri) {
//   console.error("MONGODB_URI was not loaded from .env");
//   process.exit(1);
// }

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => { 
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Mongo connection failed");
        console.log(error.message);
        process.exit(1);
    })


async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing.");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
}

startServer();