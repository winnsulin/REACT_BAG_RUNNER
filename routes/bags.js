const express = require('express');
const router = express.Router();
const bagController = require('../controllers/bagController');

// CREATE bag
router.post('/', bagController.createBag);

// GET all bags
router.get('/', bagController.getBags);

// UPDATE bag (mark delivered / edit)
router.put('/:id', bagController.updateBag);

// DELETE by gate (Drop Off feature)
router.delete('/gate/:gate', bagController.deleteByGate);

module.exports = router;