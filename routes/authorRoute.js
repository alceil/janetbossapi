const express= require('express');
const Authordata = require('../model/Authordata');
const authorsRouter = express.Router();

authorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors)
    {
        console.log(authors);
        res.json(authors);
})
});

authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    Authordata.findOne({_id: id})
    .then(function(author){
        res.json(author);
})
});

authorsRouter.post('/update/:i', function(req,res){
    var id = req.params.i
    var item = { $set : req.body }
    Authordata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
        if (err) {
            console.log(err);
        } else {
            res.json({msg : 'updated succesfully'});
        }
    });
});


authorsRouter.get('/delete/:i', function(req,res){
    const id = req.params.i
    Authordata.deleteOne({_id:id})
    .then(function(){
        res.json({msg : 'deleted succesfully'});
    })

});


module.exports = authorsRouter;