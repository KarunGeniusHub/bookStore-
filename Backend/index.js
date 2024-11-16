import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


const app = express()

dotenv.config()

app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 4000
const URL = process.env.MongoDBURL
// Connect to mongoDB
try {
  mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Connected to MongoDB");
  
} catch (error) {
  console.log("Error: ", error);
  
}

// Defining routes 

app.use("/book", bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})