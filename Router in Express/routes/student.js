import express from "express"

const router = express.Router();

router.get('/', (req, res) => {
	res.send('All Students Home Page');
});


router.get('/all', (req, res) => {
	res.send('All Students');
});

router.get('/edit', (req, res) => {
	res.send('Edit Students');
});


export default router;

