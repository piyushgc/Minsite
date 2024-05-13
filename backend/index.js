const express = require("express");
const app = express();
const path = require("path");

// const dotenv = require('dotenv');

const bodyParser = require('body-parser');
const db = require('../backend/db');
// const userfeedback = require("../backend/model/userfeedback");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.static(__dirname+'/public'))
app.use(express.json());


app.get('/',(req,res)=>{
        res.render('home')
})
app.get('/health',(req,res)=>{
    res.render('health')
})
app.get('/food',(req,res)=>{
    res.render('food')
})  
app.get('/social',(req,res)=>{
    res.render('social')
})
app.get('/About',(req,res)=>{
    res.render('About')
})
const feedbackRoute = require("./Routes/feedbackRoutes");
app.use("/", feedbackRoute);



const PORT = process.env.PORT||9000
app.listen(PORT,()=>{
    console.log('Server is running');
})