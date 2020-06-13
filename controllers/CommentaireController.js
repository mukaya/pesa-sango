const express = require("express");
const Commentaires = require("../models/CommentaireModel");
const Plaintes=require("../models/PlainteModel");

class CommentaireController {
  static createCommentaire() {
    return async (request, response, next) => {
      const { label, id_user} = request.body;
      const {id_plainte}=request.params;
      if (!label || !id_user ) {
        return response.status(422).json({
          error: "champs manquants"
        });
      }
      const commentaires = new Commentaires({ label, id_user, id_plainte});
      await commentaires
        .save()
        .then((commentaire) => {
          if (commentaire) {
            response.status(201).json(commentaire);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  static getCommentaire() {
    return async (request, response, next) => {
      Commentaires.find({id_plainte:request.params.id_plainte})
        .populate("id_user","username email telephone")
        .exec()
        .then((commentaires) => {
          if (commentaires) {
            response.status(200).json(commentaires);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }

}

module.exports = CommentaireController;
