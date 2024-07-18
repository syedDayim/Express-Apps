import express from "express";
import { index, about } from "../controller/indexController.js";
const router = express.Router();


router.get('/', index);
router.get('/about', about);

export default router;