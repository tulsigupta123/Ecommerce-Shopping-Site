import productModel from '../Model/ProductModel.js'

// Create Product(Only for Admin)-
export const createProduct = async(req,res) => {
try {
    const {name,description,image,category,price,rating,stock,numOfReviews,reviews,comment,createdAt} = req.body
  const product = await productModel({...req.body}).save();
  if(!name || !description || !image || !category || !price){
    return res.status(400).send({
        success:false,
        message:"Please fill all the details"
    })
  }
  res.status(200).send({
    success:true,
    message:"Product Created Successfully",
   product
  })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Product can't be created",
        error
    })
}
}

// Get single product-
export const getSingleProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await productModel.findById(id);
        if(!product){
            return res.status(400).send({
                success:false,
                message:"Product not found"
            })
        }
        res.status(200).send({
            success:true,
            message:"Product details are fetched successfully",
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"No Products found"
        })
    }
}



// Get all products-
export const getAllProducts = async(req,res) => {
 try {
    const products = await productModel.find({})
    if(!products){
        return res.status(200).send({
            success:true,
        message:"There is no product to show",
        })
    }
    res.status(200).send({
        success:true,
        message:"All Products List",
        products
    })
 } catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"No Products found"
    })
 }
}

// Update product(Only for admin)-
export const updateProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,description,image,category,price,rating,stock,numOfReviews,reviews,comment,createdAt} = req.body;
      let product = productModel.findById({id})
      if(!product){
        return res.status(400).send({
            success:false,
            message:"Product not found"
        })
      }
      product = await productModel.findByIdAndUpdate(id,{...req.body},{new:true});
      await product.save();
      res.status(200).send({
        success:true,
        message:"Product Updated Successfully",
        product
    })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            
        })
    }
}

// Delete Product-
export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await productModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Product Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Something went wrong"
        });
    }
}