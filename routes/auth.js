const express = require('express');
const { register, login } = require('../controllers/authController'); // Ensure this import is correct
const router = express.Router();

// Register a new customer
router.post('/register', register);

// Login a customer
router.post('/login', login);

module.exports = router;