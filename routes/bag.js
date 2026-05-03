const express = require('express');
const router = express.Router();
const controller = require('../controllers/bagController');

router.post('/', controller.createBag);
router.get('/', controller.getBags);
router.put('/:id', controller.updateBag);
router.delete('/gate/:gate', controller.deleteByGate);

module.exports = router;