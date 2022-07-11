
const express=require("express");

const app=express();

const SingleBook=(req,res,next)=>{
    req.name=req.params.name;
    res.send({"bookName":req.name});
}

app.get("/",(req,res)=>{
    console.log("Welcome to books api");
    res.send("welcome to books api");
})

app.get("/books",(req,res,next)=>{
    res.send("Fetching all books");
    console.log("Fetching all books");
    next();
})

app.get("/books/:name",SingleBook);

app.listen(3000);