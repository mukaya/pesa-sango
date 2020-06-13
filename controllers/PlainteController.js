const express = require('express')
const Plaintes = require("../models/PlainteModel")

class PlainteController {
    static createPlainte(){
        return async (request, response, next)=>{
            const { titre, description, date_publication, image, status, id_categorie, id_commune, adresse} = request.body
            if(!titre || !description|| !image || !status || !id_categorie || !id_commune || !adresse){
                return response.status(422).json({
                    error: "Veuillez saisir tous les champs"

                })
            }
            const plainte = new Plaintes({titre, description, date_publication, image, status, id_categorie, id_commune, adresse})
            await plainte.save()
            .then((doc)=>{
                if(doc){
                    response.status(201).json({
                        message: "created plainte",
                        plainte: doc
                    })
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
    static getPlainte(){
        return async (request, response, next)=>{
            Plaintes.find()
           .populate('id_categorie', "label")
           .populate('id_commune', "label")
           .exec()
           .then((plaintes)=>{
               if(plaintes){
                    response.status(200).json({
                        taille: plaintes.length,
                        plaintes: plaintes
                    })
               }
           })
           .catch((error)=>{
               console.log(error)
           })
        }
    }
    static getPlainteDesc(){
        return async (request, response, next)=>{
            Plaintes.find()
           .populate('id_categorie', "label")
           .populate('id_commune', "label").sort({date_publication:-1})
           .exec()
           .then((plaintes)=>{
               if(plaintes){
                    response.status(200).json({
                        taille: plaintes.length,
                        plaintes: plaintes
                    })
               }
           })
           .catch((error)=>{
               console.log(error)
           })
        }
    }
    static getPlainteAsc(){
        return async (request, response, next)=>{
            Plaintes.find()
           .populate('id_categorie', "label")
           .populate('id_commune', "label").sort({date_publication:1})
           .exec()
           .then((plaintes)=>{
               if(plaintes){
                    response.status(200).json({
                        taille: plaintes.length,
                        plaintes: plaintes
                    })
               }
           })
           .catch((error)=>{
               console.log(error)
           })
        }
    }
    static getPlainteCategorie(){
        return async (request, response, next)=>{
            Plaintes.find({id_categorie:request.params.label})
            .populate('id_categorie', "label")
            .populate('id_commune', "label")
           .exec()
           .then((plaintes)=>{
               if(plaintes){
                    response.status(200).json({
                        taille: plaintes.length,
                        plaintes: plaintes
                    })
               }
           })
           .catch((error)=>{
               console.log(error)
           })
        }
    } 
    static getPlainteById(){
        return async (request, response, next)=>{
            Plaintes.findOne({ _id: request.params.id })
            .populate('id_categorie', "label")
            .populate('id_commune', "label")
           .exec()
           .then((plainte)=>{
               if(plainte){
                    response.status(200).json({
                        taille: plainte.length,
                        plainte: plainte
                    })
               }
           })
           .catch((error)=>{
               console.log(error)
           })
        }
    } 

}


module.exports = PlainteController