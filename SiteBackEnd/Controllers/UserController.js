import userModel from '../Model/UserModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'

// Register controller-
export const registerController = async(req,res)=>{
    try {
        const{user,email,password} = req.body;
        if(!user || !email || !password){
            return res.status(400).send({
                success:false,
                message:"Please fill all details"
            })
        }
        if(!validator.isEmail){
            return res.status(400).send({
                success:false,
                message:"Please enter a valid email id"
            })
        }
        // Hashing Password-
        const hashedPassword = await bcrypt.hash(password,10)
        const userDetails = new userModel({user,email,password:hashedPassword, avtar: {
            public_id: "Sample",
            url:"Sample",
          }}).save();
        return res.status(200).send({
            success:true,
            message:"User created successfully",
            userDetails
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Something went wrong"
        })
    }
}