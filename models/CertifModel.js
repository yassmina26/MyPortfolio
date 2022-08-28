const mongoose = require('mongoose');

// if we dont create Schema we cant communicate with mongoDB
const certifSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        required: true
    },
    certLink:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('certif', certifSchema);