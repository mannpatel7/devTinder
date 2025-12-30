const authentication=(req,res,next)=>{
    console.log("Authentication started..")
    const tokens="hello";
    const isValid= tokens==="hell";
    if(!isValid){
        res.status(401).send("You are not admin")
    }
    else{
        next();
    }
}

const userauth=(req,res,next)=>{
    console.log("Authentication started..")
    const username="Mann_Patel";
    const password=12345
    const isValid= username==="Mann_Patel" &&  password===12345;
    if(!isValid){
        res.status(401).send("You Enter wrong details")
    }
    else{
        next();
    }
}
module.exports={
    authentication,userauth,
}