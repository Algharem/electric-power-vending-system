const express = require('express');
const paymentController = require('../controllers/paymentController');
// const auth = require('../middleware/auth');
const { auth } = require('../middleware/auth'); // Ensure this import is correct

const router = express.Router();

// Process payment
router.post('/', auth, paymentController.processPayment);

module.exports = router;