const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, enum: ['Completed', 'Pending', 'Failed'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);