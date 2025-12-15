import  {hashPassword}  from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
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
        if(existinguser)res.status(200).send({
            success:true,
            message:"User already exist, Please login"
        })

        //Register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({name, email, phone, address, role, password: hashedPassword}).save();
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

