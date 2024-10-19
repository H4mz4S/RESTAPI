const mongoose=require("mongoose")
const {Schema,model}=mongoose

const userSchema=new Schema({
    name:{type:String , require:true},
    email:{type:String , require:true},
    phone : Number
})

const User =model("User",userSchema)

module.exports = User