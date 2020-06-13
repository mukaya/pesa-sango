const express = require('express')
const Router = express.Router()
const UserController = require ('../controllers/UserController')
const requireLogin = require("../middleware/requireLogin")

Router.post("/createuser",requireLogin ,UserController.createUser())
Router.post("/createrole", UserController.createRole())
Router.get("/allusers", UserController.getUser())
Router.post("/login", UserController.login())
Router.get("/allusers", UserController.getUser());

module.exports = Router