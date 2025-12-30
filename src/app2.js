const express=require("express");
const app=express();
const {dbconnect}=require("./config/database")
const User=require("./models/user")

app.use(express.json()) //Middleware json->js object

app.use("/signup",async (req,res)=>{
    const user=new User(req.body)
    try{
    await user.save()
    res.send("user added successfully")
    }
    catch(err){
        res.status(403).send("Error in saving the user:" + err.message)
    }
    
})

app.get("/user",async (req,res)=>{
    const useremailId=req.body.emailId
    const user= await User.find({emailId:useremailId})
    try{
        if(user.length>0){
        res.send(user)
    }
    else{
        res.send("No user Found")
    }
    }
    catch(err){
        res.status(403).send("Something went wrong")
    }
})

app.get("/feed",async (req,res)=>{    
    try{
        const users= await User.find({})
        res.send(users)
    }
    catch(err){
        res.status(403).send("Something went wrong")
    }
})

app.get("/id",async (req,res)=>{    
    const id=req.body._id
    try{

        const users= await User.findById(id)
        res.send(users)
    }
    catch(err){
        res.status(403).send("Something went wrong")
    }
})

dbconnect().then(()=>{
    console.log("DB connect succesfull");
    app.listen(7777,()=>{
    console.log("Server is running on port 7777....");
});
})
.catch((err)=>{
    console.error("DB not connected");
})