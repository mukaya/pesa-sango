const express = require("express");
const Communes = require("../models/CommuneModel");
const Categories = require("../models/CategoriePlainteModel");
const Plaintes = require("../models/PlainteModel");

class PlainteController {
  static createPlainte() {
    return async (request, response, next) => {
      const {
        titre,
        description,
        date_publication,
        image,
        status,
        id_categorie,
        id_commune,
        adresse,
      } = request.body;
      if (
        !titre ||
        !description ||
        !image ||
        !status ||
        !id_categorie ||
        !id_commune ||
        !adresse
      ) {
        return response.status(422).json({
          error: "Veuillez saisir tous les champs",
        });
      }
      const plainte = new Plaintes({
        titre,
        description,
        date_publication,
        image,
        status,
        id_categorie,
        id_commune,
        adresse,
      });
      await plainte
        .save()
        .then((doc) => {
          if (doc) {
            response.status(201).json({
              message: "created plainte",
              plainte: doc,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  static getPlainte() {
    return async (request, response, next) => {
      Plaintes.find()
        .populate("id_categorie", "label")
        .populate("id_commune", "label")
        .exec()
        .then((plaintes) => {
          if (plaintes) {
            response.status(200).json({
              taille: plaintes.length,
              plaintes: plaintes,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }

  static getPages() {
    return async (request, response, next) => {
      try {
        const { page , limit  } = request.query;

         // execute query with page and limit values

        const plaintes = await Plaintes.find()
          .populate("id_categorie", "label")
          .populate("id_commune", "label")
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();

           // get total documents in the Posts collection 

        const count = await Plaintes.countDocuments();

         // return response with posts, total pages, and current page

        response.status(200).json({
          plaintes,
          totalPages: Math.ceil(count / limit),
          currentPage: page,
        });
      } catch (err) {
        console.error(err.message);
      }
    };
  }

  static createCategorie() {
    return async (request, response, next) => {
      const { label } = request.body;
      if (!label) {
        return response.status(422).json({
          error: "Veuillez saisir tout les champs",
        });
      }
      const categorie = new Categories({ label });
      await categorie
        .save()
        .then((doc) => {
          if (doc) {
            response.status(201).json({
              message: "Created categorie",
              categorie: doc,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }

  static createCommune() {
    return async (request, response, next) => {
      const { label } = request.body;
      if (!label) {
        return response.status(422).json({
          error: "Veuillez saisir tout les champs",
        });
      }
      const commune = new Communes({ label });
      await commune
        .save()
        .then((doc) => {
          if (doc) {
            response.status(201).json({
              message: "Created commune",
              commune: doc,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
}

module.exports = PlainteController;
