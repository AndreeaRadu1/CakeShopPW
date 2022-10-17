const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    //take info from the user
    const { name, email, password, telephoneNumber } = req.body; 
    
    //check if user already exists in db
    const userExists = await User.findOne({ email });

    if(userExists){
        res.status(400);
        throw new Error("User Already Exists");
    }
    //if the user doesn't exist, we will create a user in db
    const user = await User.create({
        name, 
        email,
        password,
        telephoneNumber,
    });

    //Ce ne va afisa in POSTMAN
    if(user){
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            telephoneNumber: user.telephoneNumber,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Error Occured");
    }

});

//For Login
const authUser = asyncHandler(async (req, res) => {
    //take info from the user
    const { email, password } = req.body; 
    
    //looks for the user by email
    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name:user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            telephoneNumber: user.telephoneNumber,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid Email or Password!");
    }
});

module.exports = { registerUser, authUser };