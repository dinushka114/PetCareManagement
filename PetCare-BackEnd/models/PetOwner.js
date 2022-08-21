const mongoose = require('mongoose')

export const PetOwner = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        url:String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    }
})