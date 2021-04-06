const express= require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const multer = require('multer');
const path= require('path');
const cloudinary = require("../config/cloduinaryConfig");





let upload =multer({
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

adminRouter.get('/',function(req,res){
    res.render('addbook',{
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



adminRouter.post('/upload', upload,
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


 adminRouter.post('/add',upload,async function(req,res){

try {
    
     var item = {
       title: req.body.title,
        author: req.body.author,
        genre: req.body.genere,
        image :req.body.image
      }

    var book = Bookdata(item);
    book.save();
    res.json({msg:"addeded succesfully"});
    
} catch (error) {
    
}

});

module.exports = adminRouter;