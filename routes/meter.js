const express = require('express');
const meterController = require('../controllers/meterController');
// const auth = require('../middleware/auth');
const { auth } = require('../middleware/auth'); // Ensure this import is correct

const router = express.Router();

// Register a meter
router.post('/',  meterController.registerMeter);
// router.post('/', auth, meterController.registerMeter);

module.exports = router;