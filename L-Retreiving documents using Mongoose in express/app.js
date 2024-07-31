import express from 'express';
import { connectDB } from './db/connection.js';
import { getAllDocs } from './models/schema.js';
const app = express();
const port = process.env.PORT || '3000';
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/schooldb";

connectDB(DB_URL);
getAllDocs();

app.get('/', (req, res) => {
    res.send('Express App is up and running');
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
