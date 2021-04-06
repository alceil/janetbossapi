const express= require('express');
const signupRouter = express.Router();
const UserAuth = require('../model/userauth');


signupRouter.post('/adduser',async function(req,res){
    try {
        console.log(req.body);
    var item = 
    {
        username: req.body.username,
        email :req.body.email,
        password: req.body.password,
        phoneno: req.body.phoneno,
       }
 
     var user = UserAuth(item);
     await user
     .save();
     res.json({msg : 'signed up  succesfully'});
    } catch (e) {
        throw e;
        
    }
   
});

module.exports = signupRouter;