const mongoose = require('mongoose');

// if we dont create Schema we cant communicate with mongoDB
const projectsSchema = new mongoose.Schema({
    projects:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('projects', projectsSchema);