const express = require('express');
const router = express.Router();

const home = require('../controllers/home');
const dataBaseTest = require('../controllers/dataBaseTest');

router.get('/', home);
router.get('/db/test', dataBaseTest);

module.exports = router;