import express from "express";
import { homeController, aboutController } from "../controller/homeController.js";
const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);

export default router;