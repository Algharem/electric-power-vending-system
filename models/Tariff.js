const mongoose = require('mongoose');

const TariffSchema = new mongoose.Schema({
  pricePerUnit: { type: Number, required: true },
});

module.exports = mongoose.model('Tariff', TariffSchema);