const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');
exports.createCustomer = async (req, res) => {
  console.log("Creating customer..."); // Debugging line
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

// exports.createCustomer = async (req, res) => {
//   const { name, email, phone, address, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const customer = new Customer({ name, email, phone, address, password: hashedPassword });
//     await customer.save();
//     res.status(201).json(customer);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  createCustomer: exports.createCustomer,
  getAllCustomers: exports.getAllCustomers,
  getCustomerById: exports.getCustomerById,
};

// module.exports.createCustomer = createCustomer;
// module.exports.getAllCustomers = getAllCustomers;
// module.exports.getCustomerById = getCustomerById;
