const express = require('express');

const router = express.Router();

const searchCtrl = require('../controllers/searchCtrl');

router.post('/search', searchCtrl.search);

module.exports = router;