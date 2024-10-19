const User=require("../models/userModel")

exports.postUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body; 
        const newUser = new User({ name, email, phone }); 
        await newUser.save(); 

        res.status(201).send({ message: "User created", newUser }); 
    } catch (error) {
        res.status(400).send({ message: "Cannot create user" }); 
        console.log(error); 
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const data= await User.find()
        res.status(200).send({message:"get all users",data})
        
    } catch (error) {
        res.status(400).send({ message: "Cannot get user" }); 
        console.log(error); 
    }
};

exports.getOneUser = async (req, res) => {
    try {
        const{id}=req.params
        const data= await User.findById(id)
        res.status(200).send({message:"get user by id",data})
        
    } catch (error) {
        res.status(400).send({ message: "Cannot get user" }); 
        console.log(error); 
    }
};

exports.updateUser = async (req, res) => {
    try {
        const{id}=req.params
        const{name,email,phone}=req.body
        const data= await User.findByIdAndUpdate(id,{$set:{name,email,phone}},{new:true})
        res.status(200).send({message:"user updated",data})
        
    } catch (error) {
        res.status(400).send({ message: "Cannot update user" }); 
        console.log(error); 
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const{id}=req.params
        const data= await User.deleteOne({_id:id})
        res.status(200).send({message:"user deleted",data})
        
    } catch (error) {
        res.status(400).send({ message: "Cannot delete user" }); 
        console.log(error); 
    }
};