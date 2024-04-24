// External
const express = require("express");
// Internal
const userController = require("../controllers/userController.js");

const userRoutes = express.Router();

// In the url "/", if the server gets a GET REQUEST it will GET all the Users
userRoutes.get("/", userController.getAllUsers);

// In the url "/", if the server gets a POST REQUEST it will
// CREATE a new user BASED on the request body
userRoutes.post("/", userController.createUser);

// In the url "/:id", if the server gets a PUT REQUEST it will
// UPDATE a user BASED on the id given in the request url, also known
// as the request params
userRoutes.put("/:id", userController.updateUser);

// In the url "/:id", if the server gets a DELETE REQUEST it will
// DELETE a user BASED on the id given in the request url, also known
// as the request params
userRoutes.delete("/:id", userController.deleteUser);

module.exports = userRoutes;
