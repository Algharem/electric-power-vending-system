const Tariff = require('../models/Tariff');

exports.setTariff = async (req, res) => {
  const { pricePerUnit } = req.body;
  try {
    const tariff = new Tariff({ pricePerUnit });
    await tariff.save();
    res.status(201).json(tariff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};