const ACCOUNTDATA = require('../models/accountdata');
const _ = require('lodash');


exports.createaccount = async (req = null,res = null,next = null) => {
    console.log(req.body);
    let accountdata = new ACCOUNTDATA(_.pick(req.body , ['image','fname','lname','dob','gender','countryCode','mobileNo','email','aadharcard','password','acceptTerms']));
    console.log(accountdata);
    const a1 = await accountdata.save();
    console.log(a1);
    return res.send(a1);
}

exports.getaccount = async(req=null,res=null,next=null) => {
    const accountdata= await ACCOUNTDATA.find();
    return res.send(accountdata)
}

exports.getoneaccount = async (req=null,res=null,next=null) => {
    const getsingleaccount = await ACCOUNTDATA.findById(req.params.id);
    return res.send(getsingleaccount);
}