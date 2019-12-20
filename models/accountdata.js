const mongoose = require('mongoose');


const AccountSchema = new mongoose.Schema({

    image:{
        type: String,
        required: true
    },
    fname:{
        type : String,
        required : true
    },
    lname:{
        type : String,
        required : true
    },
    dob:{
        type: String,
        required : true
    },
    gender:{
        type: String,
        required: true
    },
    countryCode:{
        type: String,
        required: true
    },
    mobileNo:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    aadharcard:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    acceptTerms:{
        type: String,
        required: true
    }
    
})

const Accountdata = mongoose.model('accountdata', AccountSchema);

module.exports = Accountdata;