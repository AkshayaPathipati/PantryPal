const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//basically backedn api
app.get("/api", (req, res) => {
    res.json({
        users: ["userOne", "userTwo", "userThree"]
    });
})

//fetch and display user array
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server started on port 5000")
});