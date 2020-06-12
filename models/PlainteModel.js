const mongoose = require("mongoose")

const plainteSchema = new mongoose.Schema({
    titre:{
        type: String
    },
    description:{
        type:String
    },
    date_publication:{
        type:Date,default:Date.now
    },
    image:{
        type:String
    },
    status:{
        type:Boolean
    },
    id_categorie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CategoriePlaintes"
    },
    id_commune:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Communes" 
    },
    adresse:{
        type:String
    }
})

module.exports = mongoose.model('Plaintes', plainteSchema)