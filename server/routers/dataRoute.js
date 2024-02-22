const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');

router.get('/', dataController.getCo);
router.get('/lpg', dataController.getLPG);
router.get('/smoke', dataController.getSmoke);

module.exports = router;