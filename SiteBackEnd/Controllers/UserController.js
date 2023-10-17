import userModel from '../Model/UserModel.js'

// Register controller-
export const registerController = async(req,res)=>{
    try {
        const{name,email,password} = req.body;
        const user = new userModel({name,email,password, avtar: {
            public_id: "Sample",
            url:"Sample",
          }}).save();
        return res.status(200).send({
            success:true,
            message:"User created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Something went wrong"
        })
    }
}