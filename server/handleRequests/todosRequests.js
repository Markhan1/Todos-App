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
  })

  // This section helps you create a new todo document.
  .post("/add", (req, res) => {
    if(!(req.body.name && req.body.text && req.body.status)) {
      res.json({ message: "missing data" });
      let time = dayjs().format("HH:mm:ss:SSS");
      console.log(`${time} - Insufficient data to add newdDocument in "${collec}"`);
    }
    let db_connect = dbo.getDB();
    let time = dayjs().format("HH:mm:ss:SSS");
    let newDoc = {
      name: req.body.name,
      text: req.body.text,
      status: req.body.status,
      tags: req.body.tags || [],
      date: req.body.date || time,
    };
    db_connect
      .collection(collec)
      .insertOne(newDoc, (error, result) => {
        if (error) throw error;
        res.json(result);
        console.log(
          `${time} - Added new document "${result.insertedId}" to "${collec}" - ip: "${req.ip}"`
        );
      });
  })

  // This section helps you update a single document by _id.
  .patch("/update/:id", (req, res) => {
    if(!(req.body.name && req.body.text && req.body.status)) {
      res.json({ message: "required data missing... (name, text, status)" });
      let time = dayjs().format("HH:mm:ss:SSS");
      console.log(`${time} - Insufficient data to add newdDocument in "${collec}"`);
    }
    let db_connect = dbo.getDB();
    let query = { _id: ObjectId(req.params.id) };
    let time = dayjs().format("HH:mm:ss:SSS");
    let changes = {
      $set : {
        name: req.body.name,
        text: req.body.text,
        status: req.body.status,
        tags: req.body.tags || [],
        date: req.body.date || time,
      }
    };
    db_connect
      .collection(collec)
      .updateOne(query, changes, (error, result) => {
        if (error) throw error;
        res.json(result);
        console.log(
          `${time} - Updated document "${req.params.id}" from "${collec}" - ip: "${req.ip}"`
        );
      })
  })

  // This section also updates a single document by _id.
  .post("/update/:id", (req, res) => {
    if(!(req.body.name && req.body.text && req.body.status)) {
      res.json({ message: "required data missing... (name, text, status)" });
      let time = dayjs().format("HH:mm:ss:SSS");
      console.log(`${time} - Insufficient data to add newdDocument in "${collec}"`);
    }
    let db_connect = dbo.getDB();
    let query = { _id: ObjectId(req.params.id) };
    let time = dayjs().format("HH:mm:ss:SSS");
    let changes = {
      $set : {
        name: req.body.name,
        text: req.body.text,
        status: req.body.status,
        tags: req.body.tags || [],
        date: req.body.date || time,
      }
    };
    db_connect
      .collection(collec)
      .updateOne(query, changes, (error, result) => {
        if (error) throw error;
        res.json(result);
        console.log(
          `${time} - Updated document "${req.params.id}" from "${collec}" - ip: "${req.ip}"`
        );
      });
  })

  // This section will help you delete a single document by _id.
  .delete("/:id", (req, res) => {
    let db_connect = dbo.getDB();
    let query = { _id: ObjectId(req.params.id) };
    db_connect
      .collection(collec)
      .deleteOne(query, (error, result) => {
        if (error) throw error;
        res.json(result);
        let time = dayjs().format("HH:mm:ss:SSS");
        console.log(
          `${time} - Deleted document "${req.params.id}" from "${collec}" - ip: "${req.ip}"`
        );
      });
  });

module.exports = route;