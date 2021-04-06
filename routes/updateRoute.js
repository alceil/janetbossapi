  
const express = require('express');
const updateRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');

updateRouter.get('/book/:i', function(req,res){
    const id = req.params.i;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.json(book);
      
    })
})

updateRouter.get('/author/:i', function(req,res){
    const id = req.params.i;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.json(author);       
    })
})

module.exports = updateRouter;