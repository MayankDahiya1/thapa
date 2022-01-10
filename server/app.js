require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const DB = process.env.DB;
mongoose.connect(DB,{
    useNewUrlParser: true , 
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB Connection Succesfully");
}).catch((err)=>{
    console.log("No connection Established");
})
const PORT = 3000;
app.get("/",function(req,res){
    res.send("Hello world");
});
app.get("/about",function(req,res){
    res.send("Hello You are on About Page")
});
app.get("/contact",function(req,res){
    res.send("Hello You are at Contact Page");
});
app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Succesfully connected to server 3000");
    }
})