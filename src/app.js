const express=require("express");
const app=express();
const {authentication}=require("./middlewares/auth");
const {userauth}=require("./middlewares/auth");

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
app.use("/mann",(req,res,next)=>{
    console.log("router 1")
    // res.send("This is response 1:") //comment and uncomment this and see in postman
    next()
   
},(req,res,next)=>{
    console.log("router 2")
    // res.send("This is response 2:") //comment and uncomment this and see in postman
    next()
},(req,res)=>{
    console.log("router 3")
    res.send("This is response 3:")
}

)

//Application of middlewares: Authentication
//user auth

app.use("/user/login", userauth)

app.use("/user/login/home",(req,res)=>{
    res.send("Welcome to home page")
})

app.use("/user/login/bookings",(req,res)=>{
    res.send("Welcome to Your boookings")
})



// admin auth
app.use("/admin", authentication)

app.use("/admin/getdata",(req,res)=>{
    res.send("You got all data");
})
app.use("/admin/deldata",(req,res)=>{
    res.send("You deleted the data");
})


app.post("/user",(req,res)=>{
    res.send("Data received via POST request");
});

app.delete("/user",(req,res)=>{
    res.send("User deleted");
});

app.get("/", (req, res) => {
  res.send("Hello Server home page");
});


app.use("/",(err,req,res,next)=>{
    
    if(err){
        res.status(500).send(err.statusMessage)
    }
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000....");
});