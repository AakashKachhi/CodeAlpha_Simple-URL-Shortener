import dotenv from "dotenv"



import app from "./src/app.js"
import connectDB from "./src/config/db.js"

dotenv.config()

const startSever = async () => {
  try {
    
    await connectDB()

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on Port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("Failed to start the server", error)
  }
}

startSever()
