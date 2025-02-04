// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// dotenv.config();

// exports.authenticate = (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');
//   if (!token) return res.status(401).json({ error: 'Access denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.customerId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(400).json({ error: 'Invalid token' });
//   }
// };


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Customer = require('../models/Customer');
const dotenv = require('dotenv');

dotenv.config();

// Register a new customer
exports.register = async (req, res) => {
  const { name, email, phone, address, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = new Customer({ name, email, phone, address, password: hashedPassword });
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login a customer
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(400).json({ error: 'Customer not found' });

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  register: exports.register,
  login: exports.login,
};