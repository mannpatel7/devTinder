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

app.delete("/user",async (req,res)=>{    
    const id=req.body._id
    try{
        const users= await User.findByIdAndDelete(id)
        res.send("Deleted Successfully")
    }
    catch(err){
        res.status(403).send("Something went wrong")
    }
})

app.patch("/user",async (req,res)=>{   
    const id=req.body._id
    const data=req.body
    const allowedupdate=["_id","age","gender","phoneNo"]

    const isallowed=Object.keys(data).every((d)=>allowedupdate.includes(d))
    try{
        const users= await User.findByIdAndUpdate(id, data,{returnDocument: "after",
            runValidators:true
        })
        if(!isallowed){
            throw new Error("Error Occurs")
        }
        console.log(users)
        res.send("Updated Successfully")
    }
    catch(err){
        res.status(403).send("You cant update it")
    }
})

app.patch("/user1",async (req,res)=>{   
    const emailid=req.body.emailId
    const data=req.body 
    try{
        const users= await User.findOneAndUpdate({emailId:emailid}, data)
        console.log(users)
        res.send("Updated Successfully")
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