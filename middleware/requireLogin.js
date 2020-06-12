const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')
const Users = require("../models/UserModel")

module.exports = (request, response, next)=>{
    const { authorization } = request.headers

    if(!authorization){
        return response.status(401).json({Error: "Tu dois te connecter"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, JWT_SECRET, (error, payload)=>{
        if(error){
            return response.status(401).json({error: "Tu dois te connecter"})
        }
        const { _id } = payload
        Users.findById(_id)
        .then((userData)=>{
            request.user = userData
            next()
        })
    })
}