import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,"Please Provide Product Name"],
    trim:true
},
description:{
    type:String,
    required:[true,"Please Provide Product Description"]
},
price:{
    type:Number,
    required:[true,"Please Provide Product Price"],
    maxlength:[8,"Price can't exceed 8 characters"]
},
rating:{
    type:Number,
    default: 0
},
image:[{
    public_id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
}],
category:{
type:String,
required:[true,"Please Provide Product Category"],
},
stock:{
    type:Number,
    required:[true,"Please Provide Product Stock"],
    maxlength:[4,"Stock can't be greater than 4 characters"],
    default:1
},
numOfReviews:{
    type:Number,
    default:0
},
reviews:[{
name:{
    type:String,
    required:true
},
rating:{
    type:Number,
    required:true
},
comment:{
    type:String,
    required:true
}
}],
createdAt:{
    type:Date,
    default:Date.nows
}
},{timestamps:true})

const productModel = mongoose.model("Product",productSchema)
export default productModel