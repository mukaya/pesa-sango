const express = require('express')
const Categories = require("../models/CategoriePlainteModel")


class CategorieController {
    static createCategorie(){
        return async (request, response, next)=>{
            const { label } = request.body
            if(!label){
                return response.status(422).json({
                    error: "Veuillez saisir tout les champs"
                })
            }
            const categorie = new Categories({label})            
            await categorie.save()
            .then((doc)=>{
                if(doc){
                    response.status(201).json({
                        message: "Created categorie",
                        categorie: doc
                    })
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
    static getCategorie(){
        return async (request, response, next)=>{
            Categories.find()
           .exec()
           .then((categories)=>{
               if(categories){
                    response.status(200).json({
                        taille: categories.length,
                        categories: categories
                    })
               }
           })
           .catch((error)=>{
               console.log(error)
           })
        }
    }
}


module.exports = CategorieController