const mongoose = require('mongoose');

// if we dont create Schema we cant communicate with mongoDB
const certifSchema = new mongoose.Schema({
    certif:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('certif', certifSchema);