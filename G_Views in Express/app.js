import express from "express";
import routes from "./routes/routes.js";
const app = express();
const port = process.env.PORT || '3000';

app.use('/student', routes);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})