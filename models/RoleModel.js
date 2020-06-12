const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
    label:{
        type: String
    }
})

module.exports = mongoose.model('Roles', roleSchema)