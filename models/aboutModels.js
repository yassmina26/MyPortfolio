const mongoose = require('mongoose');

// if we dont create Schema we cant communicate with mongoDB
const aboutSchema = new mongoose.Schema({
    about:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('about', aboutSchema);