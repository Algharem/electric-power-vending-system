const express = require('express');
const tariffController = require('../controllers/tariffController');
// const auth = require('../middleware/auth');
const { auth } = require('../middleware/auth'); // Ensure this import is correct

const router = express.Router();

// Set electricity tariff
router.post('/', auth, tariffController.setTariff);

module.exports = router;