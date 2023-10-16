import mongoose from 'mongoose'
const connectToDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connected to Mongodb Database: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error in database: ${error}`);
    }
}

export default connectToDb