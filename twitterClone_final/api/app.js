const express = require("express");
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
const Twitter = require('./helpers/twitter');
const twitter = new Twitter();
dotenv.config();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.json());

app.get('/tweets', (req, res)=>{
    const query = req.query.q;
   const resultType = req.query.result_type;
    const maxId = req.query.max_id;
    twitter.get(query, 10).then((response)=>{
        res.status(200).send(response.data);
    }).catch((error)=>{
        res.status(400).send(error);
    });
})

app.listen(3000, ()=>console.log("Listening on http://localhost:3000/"));

/*const { default: Axios } = require("axios");
const { error } = require("console");
let express=require("express");
let app=express();
let twitter=require("./helpers/twitter");
let Twitter=new twitter();
let port=process.env.PORT|| 3000;
//allow everybody to request
app.use((req,res,next)=>{
    res.setHeader('Access-control-Allow-Origin','*');
    next();
})
app.get("/",(req,res)=>{
    res.send("welcome to main page");
});
app.get("/tweet",(req,res)=>{
    console.log(req.query);
    const query=req.query.q || "sports";
    const count=5;
    console.log(query);
   // const url="https://api.twitter.com/1.1/search/tweets.json";
   console.log("YES");
   Twitter.get(query,count).then((response)=>{//console.log(response);
       res.send(response.data)}).catch((err)=>{console.log("nnnnnnnnYES");
           res.send(err);});
    
       // res.status(200).send(data);
})
app.listen(port,console.log(`${port}....`));*/