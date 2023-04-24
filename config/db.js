import mongoose from "mongoose";
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database connected.');
    } catch (err) {
        throw err
    }
}

export default connectDB;