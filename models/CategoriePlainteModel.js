const mongoose = require("mongoose")

const categoriePlainteSchema = new mongoose.Schema({
    label:{
        type: String
    }
})

module.exports = mongoose.model('CategoriePlaintes', categoriePlainteSchema)