
import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from './db/connection.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/ateeb";

connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
