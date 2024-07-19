import express from "express";
import { indexController, aboutController } from "../controller/controller.js";
const router = express.Router();

router.get('/', indexController);
router.get('/about', aboutController);


export default router;
