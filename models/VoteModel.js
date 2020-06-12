const mongoose = require("mongoose")

const voteSchema = new mongoose.Schema({
    nombreVote:{
        type: Number
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

module.exports = mongoose.model('Votes', voteSchema)