const indexController = (req, res) =>{
    const data = {
        'title': 'index page',
        'message': 'Index Page',
    }
    res.render('index', {'data' : data});
}

const aboutController = (req, res) => {
    const data = {
        'title': 'about page',
        'message': 'About Page',
    }
    res.render('about', {'data' : data});
};


export { indexController, aboutController };