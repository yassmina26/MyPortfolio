
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username:{
        type:string,
        required:true,
        trim:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true,
    }

},
{timestamps:true})

module.exports=mongoose.model("user",userSchema)