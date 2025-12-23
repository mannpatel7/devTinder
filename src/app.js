const express=require("express");
const app=express();

app.use("/abc",(req,res)=>{
    res.send("Hello Server abc page");
});

app.use("/path",(req,res)=>{
    res.send("Hello Server path page");
});

app.use("/",(req,res)=>{
    res.send("Hello Server home page");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000....");
});