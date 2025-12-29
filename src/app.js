const express=require("express");
const app=express();
app.get("/abc*d",(req,res)=>{
    res.send("hi i am beast")
});

app.get("/user",(req,res)=>{
    console.log(req.query); //in this we need to use /user?userid=1234
    res.send({name:"John", age:30});
});
app.get("/user/:userid/:userpass/:username",(req,res)=>{

    console.log(req.params);
    res.send({name:"John", age:30});
});


app.post("/user",(req,res)=>{
    res.send("Data received via POST request");
});

app.delete("/user",(req,res)=>{
    res.send("User deleted");
});

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