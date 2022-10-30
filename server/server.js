require("dotenv").config({ path: "./config.env" });
const express = require("express");
const bodyParser = require("body-parser");
const dbo = require("./db/conn");

// Create express app
const app = express();

// Setup server port
const port = process.env.PORT;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get('/', (req, res) => {
  res.status(200);
});

// Require todos routes
const todosRoutes = require('./src/routes/todos.routes');

// using a middleware
app.use("/api/v1/todos", todosRoutes);

// listen for requests
app.listen(port, () => {
  dbo.connectToServer((err) => {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});