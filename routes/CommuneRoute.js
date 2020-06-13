const express = require('express')
const Router = express.Router()

const CommuneController=require ('../controllers/CommuneController')

Router.post("/createcommune", CommuneController.createCommune())
Router.get("/allcommune", CommuneController.getCommune())

module.exports = Router