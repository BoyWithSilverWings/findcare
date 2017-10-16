const express = require('express');

const router = express.Router();

const searchCtrl = require('../controllers/searchCtrl');

router.post('/search', searchCtrl.suggestions);

module.exports = router;