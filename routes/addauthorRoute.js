const path= require('path');
const express= require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');
const multer = require('multer');
const cloudinary = require("../config/cloduinaryConfig");
const storage = multer.memoryStorage();


let upload =
multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
  }).single('image'); 

addauthorRouter.post('/upload', upload,
async (req, res) => {
      try {
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result.url);
        res.json({url:result.url});            
      } catch (err) {
        console.log(err);
      }
    }  
);

addauthorRouter.get('/',function(req,res){
    res.render('addauthor',{
        nav:[
            {link:"/books",name:"Books"},
            {link:"/authors",name:"Authors"},
            {link:"/login",name:"Login"},
            {link:"/signup",name:"Signup"},
            {link:"/admin",name:"Add book"},
            {link:"/addauthor",name:"Add author"}
         
        ],
        title :'Library'
    });
});

addauthorRouter.post('/add',async function(req,res){   
    try 
    {
    console.log(req.body);
   // const result = await cloudinary.uploader.upload(req.file.path);
    const authorData = Authordata(
      
      {
              author: req.body.author,
              image : req.body.image,
              details: req.body.details
            }
            ) 
        const authorSave = await authorData.save();
        console.log(authorSave);
        res.json({msg:"addeded succesfully"});
      } catch (err) {
        console.log(err);
      }
});
module.exports = addauthorRouter;