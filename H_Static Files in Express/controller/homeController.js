import { join } from 'path';


const homeController = (req, res) => {
    res.sendFile(join(process.cwd(), 'views', 'index.html'));
}
const aboutController = (req, res) => {
    res.sendFile(join(process.cwd(), "views", "about.html"));
}

export { homeController, aboutController };