const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");


router.post("/newUser", userControllers.postUser)
router.get("/",userControllers.getAllUsers)
router.get("/:id",userControllers.getOneUsers)
router.put("/:id",userControllers.updateUser)
router.delete("/:id",userControllers.deleteUser)

module.exports =router
