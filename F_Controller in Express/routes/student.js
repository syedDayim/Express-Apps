import express from 'express';
import { allStudents, studentID} from "../controller/studentController.js";
const router = express.Router();

router.get("/all", allStudents);
  
router.get("/:id", studentID);


export default router;