const express = require('express');
const router = express.Router();

const home = require('../controllers/home');
const dataBaseTest = require('../controllers/dataBaseTest');

router.get('/', home);
router.get('/db/test', dataBaseTest);

router.post('/transponder', function (req, res) {
    console.log(req.body);
    res.json({ message: 'OK' })
})

module.exports = router;