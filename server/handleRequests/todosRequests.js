const express = require("express");
const route = express.Router();

const dbo = require("../db/conn");
const ObjectId = dbo.getObjectId();

const dayjs = require("dayjs");
const collec = "todos";

route

  // This section helps you get a list of all todos documents.
  .get("/", (req, res) => {
  let db_connect = dbo.getDB();
  db_connect
    .collection(collec)
    .find({})
    .toArray((error, result) => {
      if (error) throw error;
      res.json(result);
      let time = dayjs().format("HH:mm:ss:SSS");
      console.log(
        `${time} - Retrieved all documents from "${collec}" - ip: "${req.ip}"`
      );
    });
})

  // This section helps you get a single todo document by _id.
  .get("/:id", (req, res) => {
    let db_connect = dbo.getDB();
    let query = { _id: ObjectId(req.params.id) };
    db_connect
      .collection(collec)
      .findOne(query, (error, result) => {
        if (error) throw error;
        res.json(result);
        let time = dayjs().format("HH:mm:ss:SSS");
        console.log(
          `${time} - Retrieved document "${req.params.id}" from "${collec}" - ip: "${req.ip}"`
        );
      });
  });

module.exports = route;