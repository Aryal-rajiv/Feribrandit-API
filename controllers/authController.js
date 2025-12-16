import  {comparePassword, hashPassword}  from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';
export const registerController = async(req, res) => {
    try{
    
        const {name,email, password, role, phone, address} =req.body;
        //validation
        if(!name){
            return res.send({error: "name is required"});
        }
        if(!email){
            return res.send({error: "email is required"});
        }
        if(!password){
            return res.send({error: "password is required"});
        }
        if(!phone){
            return res.send({error: "Phone number is required"});
        }
        if(!address){
            return res.send({error: "address is required"});
        }

        //check existing user
        const existinguser = await userModel.findOne({email});
        if(existinguser) return res.status(200).send({
            success:true,
            message:"User already exist, Please login"
        })

        //Register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({name, email, phone, address, role, password:hashedPassword}).save();
        res.status(201).send({
            sucesss: true,
            messsage: "User registerred succefully",
            user
        })

    }catch(error){
        console.log(error);
         res.status(500).send({
            success: false,
            message: "Error in user Registration",
            error
        });
    }
};

export const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password",
            });
         }
         //Check user
         const user = await userModel.findOne({email});
         if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered",
            });
         }
         const match = await comparePassword(password,user.password);
         if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password",
            });
         }
         //token
         const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
         });
         res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role,
            },
            token,
         });

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Login",
            error
        });
    }  
};



