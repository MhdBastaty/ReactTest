const mongoose = require('mongoose');

const SignupTemplate = new mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    remark:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true    
    }
})

module.exports = mongoose.model('testTable', SignupTemplate)