const express = require('express')
const Router = express.Router()
const PlainteController = require ('../controllers/PlainteController')

Router.post("/createplainte", PlainteController.createPlainte())

Router.get("/allplaintes", PlainteController.getPages())

module.exports = Router