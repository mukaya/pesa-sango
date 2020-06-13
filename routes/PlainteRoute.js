const express = require('express')
const Router = express.Router()
const PlainteController = require ('../controllers/PlainteController')

Router.post("/createplainte", PlainteController.createPlainte())
Router.get("/plaintes", PlainteController.getPlainte())
Router.get("/plainteDesc", PlainteController.getPlainteDesc())
Router.get("/plainteAsc", PlainteController.getPlainteAsc())
Router.get("/plainteCategorie", PlainteController.getPlainteCategorie())
Router.get("/plainte/:id", PlainteController.getPlainteById())
Router.get("/plainte/:categorie", PlainteController.getPlainteCategorie())
Router.get("/allplaintes", PlainteController.getPages())

module.exports = Router