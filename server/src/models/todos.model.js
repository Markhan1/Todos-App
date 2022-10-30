"use strict";

const dayjs = require("dayjs");
const dbo = require("../../db/conn");
const ObjectId = dbo.getObjectId();
const collecName = "todos";

function Todos(todos) {
  this.name = todos.name;
  this.text = todos.text;
  this.status = todos.status;
  this.tags = todos.tags || [];
  this.date = todos.date || dayjs().format("YYYY/MM/DD HH:mm:ss");
  this.createdAt = new Date();
  this.updatedAt = new Date();
}

Todos.findAll = function (result) {
  let db_connect = dbo.getDB();
  db_connect
    .collection(collecName)
    .find({})
    .toArray((err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
};

Todos.findById = function (id, result) {
  let db_connect = dbo.getDB();
  let query = { _id: ObjectId(id) };
  db_connect
    .collection(collecName)
    .findOne(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
};

Todos.createOne = function (newTodoObj, result) {
  let db_connect = dbo.getDB();
  let newTodoJson = JSON.parse(JSON.stringify(newTodoObj));
  db_connect
    .collection(collecName)
    .insertOne(newTodoJson, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
};

Todos.updateOneById = function (id, changesObj, result) {
  let db_connect = dbo.getDB();
  let query = { _id: ObjectId(id) };
  let changesJson = {
    $set: JSON.parse(JSON.stringify(changesObj)),
  };
  db_connect
    .collection(collecName)
    .updateOne(query, changesJson, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
};

Todos.deleteOneById = function (id, result) {
  let db_connect = dbo.getDB();
  let query = { _id: ObjectId(id) };
  db_connect
    .collection(collecName)
    .deleteOne(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
}

module.exports = Todos;
