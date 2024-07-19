import express from "express";
import router from "./routes/routes.js";
import { join } from "path"
const app = express();
const port = process.env.PORT || '3000';

app.use(express.static(join((process.cwd(), 'public'))));
app.use('/', router);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})