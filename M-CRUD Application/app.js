import express from 'express';
import { connectDB } from './db/connection.js';
import router from './routes/web.js';
import { join } from 'path';

const app = express();
const port = process.env.PORT || '3000';
const db_url = process.env.db_url || "mongodb://localhost:27017/crudDB";

// Establishing Connection with the database:
connectDB(db_url);

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting Static files
app.use(express.static(join(process.cwd(), "public")));

// Set Default Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', router);

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
