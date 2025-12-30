const mongoose=require("mongoose")

const dbconnect = async ()=>{
    await mongoose.connect("mongodb+srv://Mann_Patel:NHvoFChny5wZebQB@nodeserver.7xnmlpz.mongodb.net/devtinder")
}

module.exports={
    dbconnect,
} 