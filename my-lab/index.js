var express=require("express")  
var fs= require("fs") 
var app=express() 
// add middle ware function for body parsing 
var bodyParser = require("body-parser");  
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/',function(req,res){ 
    res.send("hello it is my first express application") 
    })
//app.get('/',function(req,res){ 
res.send("hello it is my first express application") 
//}) 

// exercise 2 


app.get('/about',function(req,res) 
{ res.send("This is basic express application ") 
}) 
app.get('/users/:userId/books/:bookId', function (req, res) { 
res.send(req.params) 
})
app.listen(5000,function(){console.log("server is running on port 5000")}) 


