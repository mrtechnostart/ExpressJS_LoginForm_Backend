const mongoose = require("mongoose")

const ITech = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    lastname:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        trim:true
    },
    dateOfBirth:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
})

module.exports = mongoose.model("Itech",ITech)