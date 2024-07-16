// Routing
import express from 'express';
const app = express();
const port = process.env.PORT || "3000";

const PNF = '<h1 style={color: "red";}>Page not found</h1>'

// Routs
// app.get('/', (req, res)=>{
//     res.send('Hello World!');
// });

// app.get('/about', (req, res) => {
//     res.send('About Page');
// });


// app.all("*", (req, res) => {
//     res.send(PNF)
// })

// ======================= Chained Routes ==========================

app.get('/chained', (req, res, next) => {
    console.log('First Middleware');
    res.locals.message = 'First Middleware';
    next();
}, (req, res, next) => {
    console.log('Second Middleware');
    res.locals.message += ' -> Second Middleware';
    next();
}, (req, res, next) => {
    console.log('Third Middleware');
    res.locals.message += ' -> Third Middleware';
    res.send(res.locals.message);
});



// ==================CRUD ROUTES================================

// app.get('/student/all', (req, res) => {
//     res.send('all Student Data');
// });

// app.post("/student/add", (req, res) => {
//     res.send('Add Student Data');
// });

// app.put('/student/edit', (req, res) => {
//     res.send('Edit Student Data');
// });
// app.delete('/student/delete' , (req, res) => {
//     res.send('Delete Student Data');
// });

// app.all('*', (req, res) => {
//     res.send(PNF);
// })



app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
