const express = require('express');
const Router = express.Router();
const CommentaireController=require('../controllers/CommentaireController');



Router.post("/plaintes/:id_plainte/comments",CommentaireController.createCommentaire());
Router.get("/plaintes/:id_plainte/comments",CommentaireController.getCommentaire());

module.exports = Router