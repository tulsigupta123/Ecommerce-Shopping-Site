import express from 'express'
import ProductRoute from './Routes/ProductRoute.js'
import UserRoutes from './Routes/UserRoutes.js'
import connectToDb from './Config/DataBase.js'
import cors from 'cors'
import morgan from 'morgan'
const port = 8070 || process.env.PORT
import dotenv from 'dotenv'

// Configure environment variable-
dotenv.config()

// Connecting to Database-
connectToDb()

// Creating app-
const app = express()

// Middlewares-
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routes-
app.use('/api/v1',ProductRoute)
app.use('/api/v1',UserRoutes)

app.get('/',(req,res)=>{
res.send("Hello online users")
})

app.listen(port,()=>{
    console.log("Server is listening on port no",port);
})