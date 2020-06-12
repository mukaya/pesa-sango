const express = require('express')
const Router = express.Router()
const UserController = require ('../controllers/UserController')


Router.post("/createuser", UserController.createUser())
Router.post("/createrole", UserController.createRole())
Router.get("/allusers", UserController.getUser());

module.exports = Router