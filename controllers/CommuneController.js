const express = require('express')
const Communes = require("../models/CommuneModel")


class CommuneController {
    static createCommune(){
        return async (request, response, next)=>{
            const { label } = request.body
            if(!label){
                return response.status(422).json({
                    error: "Veuillez saisir tout les champs"
                })
            }
            const commune = new Communes({label})            
            await commune.save()
            .then((doc)=>{
                if(doc){
                    response.status(201).json({
                        message: "Created commune",
                        commune: doc
                    })
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
    static getCommune(){
        return async (request, response, next)=>{
            Communes.find()
           .exec()
           .then((communes)=>{
               if(communes){
                    response.status(200).json({
                        taille: communes.length,
                        communes: communes
                    })
               }
           })
           .catch((error)=>{
               console.log(error)
           })
        }
    }
}


module.exports = CommuneController