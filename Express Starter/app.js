import express from 'express';

const app = express();
const port = process.env.PORT || "3000";

app.get('/', (req, res) => {
    res.send("hello, world");
});

app.get('/about', (req, res) => {
    res.send("about page");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});