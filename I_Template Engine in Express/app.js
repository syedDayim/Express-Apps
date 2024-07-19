import express from "express";
const app = express();
import router from "./routes/web.js";
const port = process.env.PORT || '3000';

app.set('view engine', 'ejs');

app.use('/', router);


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})