
import express from 'express';
import { connectDB } from './db/connection.js';
import { createDOC } from './models/Student.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb"

connectDB(DATABASE_URL);
createDOC();

app.get('/', (req, res) => {
    res.send('Express App is up and running');
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
