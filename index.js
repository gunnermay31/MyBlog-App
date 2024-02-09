const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blog = require("./routes/blog");  // import the routes
app.use("/api/v1/", blog); // mount the routes to the blog

const connectwithDb = require("./config/database");

// Connect to the database before starting the server
connectwithDb();

app.listen(PORT,()=>{
    console.log(`the server is up and running at ${PORT}`);
})

app.get("/", function (req, res) {
    res.send("<h1>This is the home page</h1>");
});


