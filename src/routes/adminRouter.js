const express = require('express');
const adminController = require('../controllers/adminController.js');

const router = express.Router();

router.post('/', adminController);

module.exports = router;