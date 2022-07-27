const mongoose = require('mongoose');

// if we dont create Schema we cant communicate with mongoDB
const projectSchema = new mongoose.Schema({

    product_id:{
        type:String,
        unique:true,
        required:true
    },
    title:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type: Object,
        required: true
    }
    

})

module.exports = mongoose.model('project', projectSchema);