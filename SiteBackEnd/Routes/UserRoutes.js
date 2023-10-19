import express from 'express'
const router = express.Router();
import {registerController,loginController} from '../Controllers/UserController.js'

// Register user-
router.post('/register',registerController)

// Login user-
router.post('/login',loginController)

export default router