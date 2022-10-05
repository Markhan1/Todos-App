require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT;

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const dbo = require("./db/conn");

app.get("/", (req, res) => {
  res.json({ status: 200 });
});

app.use("/todos", require("./handleRequests/todosRequests"));

app.listen(port, () => {
  dbo.connectToServer((err) => {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
