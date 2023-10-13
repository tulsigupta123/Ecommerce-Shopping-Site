export const getAllProducts = async(req,res) => {
 try {
    
 } catch (error) {
    res.status(500).send({
        success:false,
        message:"No Products found"
    })
 }
}