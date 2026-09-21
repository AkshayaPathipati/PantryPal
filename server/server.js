const express = require('express')
const app = express()

//basically backedn api
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

//fetch and display user array
app.listen(5000, () => { console.log("server started on port 5000") })
//client port will be at 3000