const indexController = (req, res) =>{
    const data = {
        'title': 'index page',
        'message': 'Hello world',
    }
    res.render('index', {'data' : data});
}

const aboutController = (req, res) => {
    res.render('about');
};


export { indexController, aboutController };