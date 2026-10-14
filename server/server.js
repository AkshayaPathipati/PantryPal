const path = require('path')


const express = require('express');
const cors = require('cors');

//account making
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//database
const mongoose = require('mongoose');
require('dotenv').config({
    path: path.join(__dirname, ".env"),
});
//TODO: recipe model

const app = express();
const User = require("./User");

app.use(cors({
    origin: [
        "http://localhost:3000", 
        "http://localhost:5173",
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

//create account
app.post("/api/register", async (req, res) => {
  try {
    const {email, password} = req.body || {};

    //check email and password were provided
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      password.length < 8 || password.length > 72 //bcrypt has 72-byte password limit
     ) {
      return res.status(400).json({
        message: "Invalid email or password. Password must be at 8-72 characters long.",
      });
  }
  const normalizedEmail = email.trim().toLowerCase();

  //check is email already registered
  const existingUser = await User.findOne({ email: normalizedEmail });


  if (existingUser) {
    return res.status(409).json({
      message: "Email is already registered.",
    });
  }

//hash password before saving
const hashedPassword = await bcrypt.hash(password, 10);

//save new account
const user = await User.create({
  email: normalizedEmail,
  password: hashedPassword,
});

return res.status(201).json({
  message: "Account created.",
  user: {
    id: user._id,
    email: user.email,
  },
});
  } catch (error) {
    if (error.code == 11000) {
      return res.status(409).json({
        message: "Email is already registered.",
      });
    }
    console.error("Error creating account:", error.message);
    return res.status(500).json({
      message: "Error: Could not create account.",
    });
  }
}); 

//log in
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password ||  password.length > 72) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
  }

  const user = await User.findOne({ email: email.trim().toLowerCase()});

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({
      message: "Invalid email or password.",
    });
    }

const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

res.json({
  message: "Login successful.",
  token,
  user: {
    id: user._id,
    email: user.email, 
  },
});
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Could not log in. Please try again.",
    });
  }
    });

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

app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find({});

    //res.json({ recipes, }); //lol what does this do

    res.status(200).json({ recipes, });
  } catch (error) {
    console.error("Failed to retrieve recipes:", error);

    res.status(500).json({
      message: "The server could not retrieve recipes.",
    });
  }
});

app.post("/api/recipes", async (req, res) => {
    try{
        const {username, recipeName} = req.body;
        const recipe = await Recipe.create({
            username,
            recipeName,
        });

        // let collection = db.collection("records"); //what is db?
        // let result = await collection.insertOne(recipe);

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
const PORT = 5001;

// const mongoUri = process.env.MONGODB_URI;

// console.log("MongoDB URI loaded:", Boolean(mongoUri));

// if (!mongoUri) {
//   console.error("MONGODB_URI was not loaded from .env");
//   process.exit(1);
// }

/*mongoose
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
*/

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
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
