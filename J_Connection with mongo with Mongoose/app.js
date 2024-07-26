
import express from 'express';
const app = express();
const port = process.env.PORT || '3000';

app.get('/', (req, res) => {
    res.send('Express App is up and running');
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
