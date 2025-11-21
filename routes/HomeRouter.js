const express = require('express');
const router = express.Router();
const Home = require('../controllers/HomerController');
const CheckAuth = require('../middleware/CheckAuth');

router.get('/', CheckAuth , Home.home);

module.exports = router;