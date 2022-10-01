const express = require("express");
const route = express.Router();
const dbo = require("../db/conn");

route.get("/", (req, res) => {
  let db_connect = dbo.getDB();
  db_connect
    .collection("todos")
    .find({})
    .toArray((error, result) => {
      if (error) throw error;
      res.json(result);
    });
});

module.exports = route;