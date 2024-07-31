import mongoose, { mongo } from "mongoose";


const connectDB = async (DATABASE_URL) => {
    await mongoose.connect(DATABASE_URL)
    .then(()=>{
        console.log("Connection with database successful")        
    })
    .catch((err) => {
        console.log(err)
    })
}

export { connectDB }