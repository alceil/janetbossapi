const express= require('express');
const booksRouter = express.Router();
const Bookdata= require('../model/Bookdata');

booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books)
    {
        console.log(books[0]);
        res.json(books);
    })
    
});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    Bookdata.findOne({_id: id})
    .then(function(book){
        res.json(book);
    })

    booksRouter.post('/update/:i', function(req,res){
        var id = req.params.i
        var item = { $set : req.body }
        Bookdata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
            if (err) {
                console.log(err);
            } else {
                res.json({msg : 'updated succesfully'});
            }
        });
    });
   
});
booksRouter.get('/delete/:i', function(req,res){
    const id = req.params.i
    Bookdata.deleteOne({_id:id})
    .then(function(){
        res.json({msg : 'deleted successfully'});
    })

});


module.exports = booksRouter;
