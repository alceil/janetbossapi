const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose=  require('mongoose');
const port =process.env.PORT || 2000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
const booksRouter = require('./routes/bookRoute');
const authorsRouter = require('./routes/authorRoute');
const signupRouter = require('./routes/signupRoute');
const loginRouter = require('./routes/loginRoute');
const adminRouter = require('./routes/adminRoute');
const addauthorRouter = require('./routes/addauthorRoute');
const updateRouter = require('./routes/updateRoute');

mongoose.connect('mongodb+srv://userone:userone@janetict.gs42m.mongodb.net/ICTFILES?retryWrites=true&w=majority',{ useFindAndModify: false , useNewUrlParser: true,useUnifiedTopology: true },()=>console.log('Connected to db'));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.urlencoded({extended:true}));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/admin',adminRouter);
app.use('/addauthor',addauthorRouter);
app.use('/update', updateRouter);
app.get('/',(req,res)=>{
    res.send("We are  on home")
});

app.listen(port);
