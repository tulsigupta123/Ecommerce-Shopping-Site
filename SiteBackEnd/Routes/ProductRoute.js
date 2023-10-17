import express from 'express'
const router = express.Router()
import {getAllProducts,createProduct,updateProduct,deleteProduct,getSingleProduct} from '../Controllers/ProductController.js'

// Get single product-
router.get('/product/:id',getSingleProduct)

// Get all products-
router.get('/all-products',getAllProducts)

// Create Product-
router.post('/create-product',createProduct)

// Update Product-
router.put('/update-product/:id',updateProduct)

// Delete Product-
router.delete('/delete-product/:id',deleteProduct)

export default router