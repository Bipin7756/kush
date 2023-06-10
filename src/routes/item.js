const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/brand/:brand', itemController.getItemsByBrand);
router.get('/category/:category', itemController.getItemsByCategory);
router.post('/upload', itemController.uploadItem);

module.exports = router;