
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 


// Registeration of user
async function registerUser(req,res){
    try{
        const {username,email,password,phone }=req.body

        // basic validation to check empty fields
        if(!username||!email||!password||!phone)
        {
            return res.status(400).json({
                message:"All fields are required necessarily"
            })
        }
        // check duplicacy 
        const isExist = await userModel.findOne({
            $or:[{username},{email}]
        })
        if(isExist)
        {
            return res.status(401).json({
                message:"User exsist already"
            })
        }

        const hashPassword = await bcrypt.hash(password,10)

        // create model
        const user = await userModel.create({
            username, 
            email,
            password : hashPassword,
            phone,
            role:"buyer", // bydefault the user willl be buyer 
        })

        return res.status(201).json({
            message:"User register successfully",
            user:{
                id :user._id,
                username: user.username,
                role:user.role
            },
        })
    }
    catch(error)
    {   console.log("ERROR:", error)  
        return res.status(500).json({
            message:"Server error in registering user"
        })
    }
}

// login user 
async function loginUser(req,res)
{
    try{
            const { identifier , password } = req.body;

            // check empty field 

            if(!identifier||!password)
            {
                return res.status(400).json({
                    message:"Kindly fill the empty fields "
                })
            }
    // check user existence

    const isExist = await userModel.findOne({
        $or:[{username:identifier},{email:identifier}]

    })
    // check username 
    if(!isExist)
    {
        return res.status(401).json({
            message:"User not found"
        })
    }
    // check password
    const checkPassword = await bcrypt.compare(password,isExist.password)
    if(!checkPassword)
    {
        return res.status(401).json({
            message:"Invalid credentials "
        });
    }
     
    
    // create token because server is stateless so do not rememeber user 

    const authToken = jwt.sign(
        {id:isExist._id,
            role:isExist.role,
        },
        process.env.JWT_SECRET
)

// store token in cookies
    res.cookie("token",authToken)

    // send response 
    return res.status(200).json(
        {message:" User found successfully ",
            token:authToken,
            user:{
                id:isExist._id,
                username:isExist.username,
                email:isExist.email,
                role:isExist.role 
            },
    
        });
        

    }
    catch(error)
    {
        console.log("ERROR:", error)  
        res.status(500).json({
            message:"Server error in login user"
        })
    }
}

module.exports={registerUser,loginUser}