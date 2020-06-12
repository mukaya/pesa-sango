const mongoose = require("mongoose")

const communeSchema = new mongoose.Schema({
    label:{
        type: String
    }
})

module.exports = mongoose.model('Communes', communeSchema)