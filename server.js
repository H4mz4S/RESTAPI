const express =require("express")
const connectDB = require("./config/connectDB")
require("dotenv").config({path:"./config/.env"})
const userRouter=require("./routes/userRoutes")

const app =express()

app.use(express.json())

connectDB()

app.use("/api/user",userRouter)

const PORT = process.env.PORT

app.listen(PORT,(err)=>{
    err ? console.log(err) : console.log("server is running on port"+PORT);
    
})