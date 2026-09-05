import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...")
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        })

        console.log(`Database connected successfully: ${mongoose.connection.host}`)
        
    } catch (err) {
        console.error("Database connection error:", err)

        process.exit(1)
    }
}

export default connectDB;