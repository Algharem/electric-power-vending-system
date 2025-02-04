const express = require('express');
const transactionController = require('../controllers/transactionController');
// const auth = require('../middleware/auth');
const { auth } = require('../middleware/auth'); // Ensure this import is correct

const router = express.Router();

// Purchase electricity
router.post('/', auth, transactionController.purchaseElectricity);

module.exports = router;