const mongoose = require('mongoose');

// if we dont create Schema we cant communicate with mongoDB
const certifSchema = new mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('certif', certifSchema);