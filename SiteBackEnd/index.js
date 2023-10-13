import express from 'express'
import {ProductRoute} from './Routes/ProductRoute.js'
const port = 8070 || process.env.PORT
import dotenv from 'dotenv'

// Configure environment variable-
dotenv.config()

// Creating app-
const app = express()

// Middlewares-
app.use(express.json())

// Routes-
app.use('/api/v1',ProductRoute)


app.get('/',(req,res)=>{
res.send("Hello online users")
})

app.listen(port,()=>{
    console.log("Server is listening on port no",port);
})