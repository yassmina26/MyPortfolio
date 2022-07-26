const mongoose = require('mongoose');

// if we dont create Schema we cant communicate with mongoDB
const projectSchema = new mongoose.Schema({
    Product_id:{
        type:String,
        unique:true,
        required:true
    },
    Title:{
        type:String,
        trim:true,
    },
    Description:{
        type:String,
        required:true
    }
    // Images: {
    //     type: Object,
    //     required: true
    // }
    

})

module.exports = mongoose.model('project', projectSchema);