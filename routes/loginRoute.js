const express= require('express');
const loginRouter = express.Router();
const UserAuth = require('../model/userauth');

loginRouter.post('/loguser', function(req,res){
    console.log(req.body);
    UserAuth.findOne({ email: req.body.email }, (err, result) => {
        if (err) return res.status(500).json({ msg: err });
        if (result.password === req.body.password) {
            res.json({msg : 'correct password'});
        } else {
            res.json({msg : 'incorrect password'});
        }
      });
});



module.exports = loginRouter;