import express from 'express';
import { 
    homeController, 
    editController, 
    createDoc, 
    updateDocById, 
    deleteDocById 
} from '../controller/crudController.js';
const router = express.Router();


router.get('/', homeController);
router.post('/', createDoc)
router.get('/edit/:id', editController);
router.post('/update/:id', updateDocById);
router.post('/delete/:id', deleteDocById);



export default router;