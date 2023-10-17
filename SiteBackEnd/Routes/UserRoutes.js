import express from 'express'
const router = express.Router();
import {registerController} from '../Controllers/UserController.js'

// Register user-
router.post('/register',registerController)

// Login user-


export default router