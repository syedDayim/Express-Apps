// Routing
import express from 'express';
const app = express();
const port = process.env.PORT || "3000";

const PNF = '<h1 style={color: "red";}>Page not found</h1>'

// Routs
app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});


app.all("*", (req, res) => {
    res.send(PNF)
})





app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
