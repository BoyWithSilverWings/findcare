const express = require('express');

const router = express.Router();

const searchCtrl = require('../controllers/searchCtrl');
const detailCtrl = require('../controllers/detailCtrl');

router.post('/search', searchCtrl.search);
router.post('/suggest', searchCtrl.suggestions);
router.post('/filter', searchCtrl.searchFilter);
router.post('/nearest', searchCtrl.nearestHospital);

router.get('/detail/:id', detailCtrl.getHospital);

module.exports = router;