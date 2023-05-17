var express=require('express'),
    http=require('http'); 
///create an expressapplication  
var app=express()
    //register a middleware   
    .use(function(rep, res, next){
        res.end('hello express!');
    })

    http.createServer(app).listen(3001);
