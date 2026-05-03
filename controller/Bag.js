const Bag = require('../models/Bag');

exports.createBag = async (req, res) => {
  const bag = await Bag.create(req.body);
  res.json(bag);
};

exports.getBags = async (req, res) => {
  const bags = await Bag.find({ status: "pending" });
  res.json(bags);
};

exports.updateBag = async (req, res) => {
  const bag = await Bag.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bag);
};

exports.deleteByGate = async (req, res) => {
  await Bag.deleteMany({ deliverGate: req.params.gate });
  res.json({ message: `Bags dropped off at gate ${req.params.gate}` });
};