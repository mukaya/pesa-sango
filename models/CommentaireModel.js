const mongoose = require("mongoose")

const commentaireSchema = new mongoose.Schema({
    label:{
        type: String
    },
    id_plainte:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plaintes"
    },
    id_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users" 
    }
})

module.exports = mongoose.model('Commentaires', commentaireSchema)