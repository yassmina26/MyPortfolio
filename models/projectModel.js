const mongoose = require('mongoose');

// Create schema to communicate with mongoodb
const projectSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    gitlink:{
        type:String,
        required: true
    }

})

module.exports = mongoose.model('project', projectSchema);