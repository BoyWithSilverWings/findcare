const express = require('express');

const router = express.Router();

const searchCtrl = require('../controllers/searchCtrl');

router.post('/search', searchCtrl.search);
router.post('/nearest', searchCtrl.nearestHospital);

module.exports = router;