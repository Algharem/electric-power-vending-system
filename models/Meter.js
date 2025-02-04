const mongoose = require('mongoose');

const MeterSchema = new mongoose.Schema({
  meterNumber: { type: String, required: true, unique: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  type: { type: String, enum: ['prepaid', 'postpaid'], required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
});

module.exports = mongoose.model('Meter', MeterSchema);