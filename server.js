const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000
const { MONGOURI } = require("./keys")
const mongoose = require('mongoose')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(error)=>{
    if(!error){console.log(`La connexion à la BDD a reussit`)
    }else{console.log(`La connexion à la BDD a échouer`)}
})
server.use(express.urlencoded({extended: false}))
server.use(express.json())

server.use(require("./routes/UserRoute"))

server.listen(PORT,()=>{
    console.log(`le serveur est lancé sur le port ${PORT}`)
})
