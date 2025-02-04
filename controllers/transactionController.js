const Transaction = require('../models/Transaction');
const Tariff = require('../models/Tariff');

exports.purchaseElectricity = async (req, res) => {
  const { customerId, meterId, amountPaid } = req.body;
  try {
    const tariff = await Tariff.findOne();
    if (!tariff) return res.status(400).json({ error: 'Tariff not set' });

    const unitsPurchased = amountPaid / tariff.pricePerUnit;
    const transaction = new Transaction({ customerId, meterId, amountPaid, unitsPurchased });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};