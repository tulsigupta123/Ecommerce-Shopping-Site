import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    user:{
    type:String,
    required:[true,"Please enter your username"],
    maxLength:[30,"Username can't have more than 30 characters"],
    minLength:[4,"Username should have minimum 4 characters"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minlength:[8,"Password should have minimum 8 characters"],
        select:false
    },
    avtar:{
        public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
    },
    role:{
        type:String,
        default:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

const userModel = mongoose.model("User",userSchema)
export default userModel