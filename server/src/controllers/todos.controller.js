"use strict";

const Todos = require("../models/todos.model");
const dayjs = require("dayjs");

exports.findAll = function (req, res) {
  Todos.findAll((error, result) => {
    if (error) res.send(error);
    let time = dayjs().format("HH:mm:ss:SSS");
    console.log(
      `${time} - retrieved all records: (${result.length} records) - ip: (${req.ip})`
    );
    res.json(result);
  });
};

exports.findById = function (req, res) {
  Todos.findById(req.params.id, (error, result) => {
    if (error) res.send(error);
    let time = dayjs().format("HH:mm:ss:SSS");
    if (!result) {
      console.log(
        `${time} - couldn't retrieve record, doesn't exist: (${req.params.id}) - ip: (${req.ip})`
      );
    } else {
      console.log(
        `${time} - retrieved record: (${req.params.id}) - ip: (${req.ip})`
      );
    }
    res.json(result);
  });
};

exports.createOne = function (req, res) {
  const newTodo = new Todos(req.body);

  // handle null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .json({ error: true, message: "Please provide all required field" });
  } else {
    Todos.createOne(newTodo, (error, result) => {
      if (error) res.send(error);
      let time = dayjs().format("HH:mm:ss:SSS");
      console.log(
        `${time} - new record created: (${result.insertedId}) - ip: (${req.ip})`
      );
      res.json({
        error: false,
        message: "One new Todo added successfully",
        data: result,
      });
    });
  }
};

exports.updateOneById = function (req, res) {
  const updateTodo = new Todos(req.body);

  // handle null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Todos.updateOneById(req.params.id, updateTodo, (error, result) => {
      if (error) res.send(error);
      let time = dayjs().format("HH:mm:ss:SSS");
      console.log(
        `${time} - updated record: (${req.params.id}) - ip: (${req.ip})`
      );
      res.json({ error: false, message: "One todo successfully updated" });
    });
  }
};

exports.deleteOneById = function (req, res) {
  Todos.deleteOneById(req.params.id, (error, result) => {
    if (error) res.send(error);
    let time = dayjs().format("HH:mm:ss:SSS");
    if (result.deletedCount === 0) {
      console.log(
        `${time} - failed to delete, record doesn't exist: (${req.params.id}) - ip: (${req.ip})`
      );
      res.json({ error: true, message: "todo already deleted" });
    } else {
      console.log(
        `${time} - deleted record: (${req.params.id}) - ip: (${req.ip})`
      );
      res.json({ error: false, message: "One todo successfully deleted" });
    }
  });
};
