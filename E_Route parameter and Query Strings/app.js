import express from "express";
const app = express();
const port = process.env.PORT || '3000';

// ================ Routes ==============================

app.get('/student/:id/:category', (req, res) => {
    const { id, category } = req.params;
    const result = `
        <ul>
            <li>Student ID: ${id}</li> 
            <li>Student Category: ${category}</li> 
        </ul>`;
    res.send(result);
})

app.get('/student', (req, res) => {
    const { id, category } = req.query;
    const result = `
        <ul>
            <li>Student ID: ${id}</li> 
            <li>Student Category: ${category}</li> 
        </ul>`;
    res.send(result);
})

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
})