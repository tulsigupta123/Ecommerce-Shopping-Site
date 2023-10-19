import userModel from '../Model/UserModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(400).send({
                success:false,
                message:"Already registered. Please login."
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

// Login controller-
export const loginController = async(req,res)=>{
    try {
        const {email,password} = req.body;
        // Validation-
       if(!email || !password){
        return res.status(400).send({
            success:false,
            message:"Please enter email and password"
        })
       }
       //Email validation-
       const user = await userModel.findOne({email}).select("+password")
       const isPasswordMatch = await bcrypt.compare(password,user.password)
       if(!user || !isPasswordMatch){
        return res.status(400).send({
            success:false,
            message:"Invalid login credentials"
        })
       }
       //Generating JWT Token-
       const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"10d"})
       res.cookie("jwtToken",token,{
        httpOnly:true
       })
       res.status(200).send({
        success:true,
        message:"User login successfully",
        user:{
            email:user.email,
            password:user.password
        },
        token
       })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Something went wrong"
        })
    }
}

// Get single user details-
// Protection through admin verification-
// export const isAdmin = async(req,res) => {
//     try{
//      const user = await userModel.findById(req.user._id);
//      if(user.role !== 1){
//         return res.status(401).send({
//             success:false,
//             message:"UnAuthorized Access"
//         });
//      }
//     }catch(error){
//         console.log(error);
//         res.status(401).send({
//             success:false,
//             message:"Error in Admin middleware"
//         })
//     }
// }