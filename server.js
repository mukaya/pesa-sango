const express = require("express")
const server = express()
const cors = require('cors')
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

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use(require("./routes/UserRoute"))
server.use(require("./routes/PlainteRoute"))
server.use(require("./routes/CommentaireRoute"))
server.use(require("./routes/CategorieRoute"))
server.use(require("./routes/CommuneRoute"))

server.listen(PORT,()=>{
    console.log(`le serveur est lancé sur le port ${PORT}`)
})
