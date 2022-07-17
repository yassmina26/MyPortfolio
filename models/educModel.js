const mongoose = require('mongoose');

// if we dont create Schema we cant communicate with mongoDB
const educationSchema = new mongoose.Schema({
    education:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('education', educationSchema);