const express = require('express')
const Roles = require("../models/RoleModel")
const Users = require("../models/UserModel")

class UserController {
    static createUser(){
        return async (request, response, next)=>{
            const { nom, email, username, password, id_role} = request.body
            if(!nom || !email || !username || !password || !id_role){
                return response.status(422).json({
                    error: "Veuillez saisir tout les champs"
                })
            }
            const user = new Users({nom,email,username,password, id_role})
            await user.save()
            .then((doc)=>{
                if(doc){
                    response.status(201).json({
                        message: "created user",
                        user: doc
                    })
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
    static getUser(){
        return async (request, response, next)=>{
           Users.find()
           .populate('id_role', "_id label")
           .exec()
           .then((users)=>{
               if(users){
                    response.status(200).json({
                        taille: users.length,
                        users: users
                    })
               }
           })
           .catch((error)=>{
               console.log(error)
           })
        }
    }
    static createRole(){
        return async (request, response, next)=>{
            const { label } = request.body
            if(!label){
                return response.status(422).json({
                    error: "Veuillez saisir tout les champs"
                })
            }
            const role = new Roles({label})            
            await role.save()
            .then((doc)=>{
                if(doc){
                    response.status(201).json({
                        message: "Created role",
                        role: doc
                    })
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }

}

module.exports = UserController