const Meter = require('../models/Meter');

exports.registerMeter = async (req, res) => {
  const { meterNumber, customerId, type, status } = req.body;
  try {
    const meter = new Meter({ meterNumber, customerId, type, status });
    await meter.save();
    res.status(201).json(meter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  registerMeter: exports.registerMeter,
};