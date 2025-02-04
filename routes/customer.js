const express = require('express');
const { createCustomer, getAllCustomers,getCustomerById } = require('../controllers/customerController'); // Ensure this import is correct
const { auth } = require('../middleware/auth'); // Ensure this import is correct

// const auth = require('../middleware/auth');

const router = express.Router();

// Create a customer
router.post('/', createCustomer);

// Get all customers
// router.get('/', auth, getAllCustomers);
router.get('/',  getAllCustomers);

// Get customer by ID
// router.get('/:id', auth, getCustomerById);
router.get('/:id', getCustomerById);

module.exports = router;


