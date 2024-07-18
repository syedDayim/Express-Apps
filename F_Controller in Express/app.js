import express from "express";
import student from "./routes/student.js"
const app = express();
const port = process.env.PORT || '3000';

app.use('/student', student);

// lISTENING TO PORT

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})