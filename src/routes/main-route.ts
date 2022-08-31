import express from 'express'
const router = express.Router();

export default router;

//serve public directory
router.use('/public', express.static(process.cwd() + '/public'));

//send index.html
router.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
})

//serve build directory
router.use('/', express.static(process.cwd() + '/build'));

router.use('/', express.static(process.cwd() + './key.js'));