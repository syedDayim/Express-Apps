import mongoose from "mongoose";

const connectDB = async (db_url) => {
    await mongoose.connect(db_url)
    .then(() => {
        console.log("Connection with the database Established!");
    })
    .catch((err) => {
        console.log(err);
    })
}

export { connectDB };