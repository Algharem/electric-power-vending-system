// controllers/AuthController.js
const { getDB } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req, res) {
  const db = getDB();
  const { name, email, phone, address, password } = req.body;

  // Check if user already exists
  const existingUser = await db.collection('customers').findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = {
    name,
    email,
    phone,
    address,
    password: hashedPassword,
  };

  const result = await db.collection('customers').insertOne(newUser);
  res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });
}

async function login(req, res) {
  const db = getDB();
  const { email, password } = req.body;

  // Find user by email
  const user = await db.collection('customers').findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
  res.status(200).json({ access_token: token, token_type: 'bearer' });
}

module.exports = { register, login };
