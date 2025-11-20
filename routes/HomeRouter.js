const express = require('express');
const router = express.Router();
const Home = require('../controllers/HomerController');

router.get('/', Home.home);

module.exports = router;