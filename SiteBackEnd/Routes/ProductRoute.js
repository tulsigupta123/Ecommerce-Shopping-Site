import express from 'express'
const router = express.Router()
import getAllProducts from '../Controllers/ProductController.js'



// Getting all products-
router.get('/all-products',getAllProducts)

export default router