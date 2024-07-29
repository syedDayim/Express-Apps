import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    return(
        await mongoose.connect(DATABASE_URL)
        .then(() => {
            console.log("Connection Successful");
        })
        .catch((err) => {
            console.log(err);
        })
    )
}

export { connectDB };