const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/columns', userController.getColumns);

module.exports = router;