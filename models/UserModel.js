const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    telephone:{
        type:String
    },
    email: {
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