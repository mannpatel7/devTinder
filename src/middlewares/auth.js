const jwt=require("jsonwebtoken")
const User = require("../models/user")


const userauth=async (req,res,next)=>{
    try{
        const {token}=req.cookies
        if(!token){
            throw new Error("Invalid Token")
        }
        //validate cookie
        const decodemessage=await jwt.verify(token,"devTinder@123")
        const {_id}=decodemessage
    
        const user= await User.findById(_id)
        if(!user){
            throw new Error("User not exist")
        }
        req.user=user
        next()
    }
        catch(err){
            res.status(403).send("Error in logining the user:" + err.message)
        }
}
module.exports={
    userauth
}