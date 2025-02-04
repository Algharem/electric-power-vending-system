const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  meterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meter', required: true },
  amountPaid: { type: Number, required: true },
  unitsPurchased: { type: Number, required: true },
  status: { type: String, enum: ['Success', 'Failed'], default: 'Success' },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);