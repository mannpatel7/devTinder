const validator=require("validator")

const validateData=(req)=>{
    const{firstName, lastName, emailId, password}=req.body
    if(!firstName || !lastName){
        throw new Error("Please enter name:")
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("Your password is weak")
    }
}

module.exports={
    validateData
}