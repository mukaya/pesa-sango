const express = require('express')
const Router = express.Router()
const UserController = require ('../controllers/UserController')
const CommentaireController=require('../controllers/CommentaireController');

Router.post("/createuser", UserController.createUser())
Router.post("/createrole", UserController.createRole())
Router.get("/allusers", UserController.getUser());
Router.post("/plaintes/:id_plainte/comments",CommentaireController.createCommentaire());
Router.get("/plaintes/:id_plainte/comments",CommentaireController.getCommentaire());
Router.get("/plaintes",CommentaireController.getPlaintes());

module.exports = Router