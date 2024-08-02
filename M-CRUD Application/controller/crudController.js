import { studentModel } from '../models/schema.js';

const homeController = async (req, res) => {
    try {
        const result = await studentModel.find();
        res.render('index', { result });

    } catch (err) {
        console.log(err)
    }
}

const createDoc = async (req, res) => {
    const { name, age, fees } = req.body;
    try {
        const data = new studentModel({
            name,
            age,
            fees
        })
        const result = await data.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect('/')
}

const editController = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await studentModel.findById(id);
        console.log(result);
        res.render('edit', { result });
    } catch (err) {
        console.log(err)
    }
}
const updateDocById = async (req, res) => {
    try {
        const result = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while updating the document.");
    }
}

const deleteDocById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await studentModel.findByIdAndDelete(id);
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}



export {
    homeController,
    editController,
    createDoc,
    updateDocById,
    deleteDocById
};