const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        maxLength:20
    },
    lastName: {
        type:String,
        maxLength:20
    },
    emailId: {
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
        minLength:8
    },
    age: {
        type:Number,
        min:18
    },
    gender: {
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Sending data is not valid");
            }
        }

    },
    photourl:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9uaOHSUP94_FgVeF4BtFT6hETgBW_a8xXw&s"
    },
    phoneNo:{
        type:Number,
        min:10
    }

},{timestamps:true})

module.exports=mongoose.model("User",userSchema)