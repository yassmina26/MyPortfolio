const mongoose = require('mongoose');

// Create schema to communicate with mongoodb
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