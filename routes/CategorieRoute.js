const express = require('express')
const Router = express.Router()

const CategorieController=require ('../controllers/CategorieController')

Router.post("/createcategorie", CategorieController.createCategorie())
Router.get("/allcategorie", CategorieController.getCategorie())

module.exports = Router