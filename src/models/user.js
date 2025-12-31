const mongoose=require("mongoose")
const validator=require("validator")

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
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Sending data is not valid");
            }
        }
    },
    password: {
        type:String,
        required:true,
        minLength:8,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Password is week");
            }
        }
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
        // default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9uaOHSUP94_FgVeF4BtFT6hETgBW_a8xXw&s",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Sending data is not valid");
            }
        }
    },
    phoneNo:{
        type:Number,
        min:10
    },
    skills: {
  type: [String],
  validate: {
    validator: function (value) {
      return value.length >= 2;
    },
    message: "At least 2 skills are required"
  }
}


},{timestamps:true})

module.exports=mongoose.model("User",userSchema)