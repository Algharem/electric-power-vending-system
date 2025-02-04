const Payment = require('../models/Payment');

exports.processPayment = async (req, res) => {
  const { customerId, amount, paymentMethod } = req.body;
  try {
    const payment = new Payment({ customerId, amount, paymentMethod });
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};