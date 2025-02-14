const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.customerId = decoded.id;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};


// const auth = (req, res, next) => {
//     // Add your authentication logic here
//     // If the user is authenticated, proceed
//     next();
//   };
  
//   module.exports.authenticate = auth;
  module.exports = {
    auth: exports.authenticate,
  };