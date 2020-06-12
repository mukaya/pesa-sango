const mongoose = require("mongoose")

const vueSchema = new mongoose.Schema({
    nombreVue:{
        type: int
    },
    id_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users" 
    },
    id_plainte:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plaintes"
    }

})

module.exports = mongoose.model('Vue', vueSchema)