const express = require("express");

const router = express.Router();

const todosController = require("../controllers/todos.controller");

// Retrieve all todos
router.get("/", todosController.findAll);

// Retrieve a single todo by id
router.get("/:id", todosController.findById);

// Create a new todo
router.post("/add", todosController.createOne);

// Update a todo by id
router.post("/update/:id", todosController.updateOneById);
router.patch("/update/:id", todosController.updateOneById);

// Delete a todo by id
router.delete("/:id", todosController.deleteOneById);

module.exports = router;