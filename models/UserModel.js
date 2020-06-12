const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    nom:{
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    id_role : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles"
    }
})

module.exports = mongoose.model('Users', userSchema)