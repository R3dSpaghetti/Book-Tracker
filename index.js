const express= require ('express');
// const { v4: uuidv4 } = require('uuid');
const methodOverride=require('method-override');
const path= require ('path'); 

const app = express();

// const connectDB = require('./config/database');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'public', 'favicon.ico')));
// DB Middleware
app.use(express.json());
// app.use(express.static('public'));

// bootstrap middleware
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


const userroute =require ('./Server/routes/userRoute'); //import router
app.use('/', userroute );// use the router


// connectDB();

app.listen(3000,()=>{
    console.log("Running on port 3000");
})













