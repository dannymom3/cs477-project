const express = require('express');
const router = express.Router();
const bookController=require('../controllers/bookController')
//const userController=require('../controllers/userController')
router.get('/',bookController.getAllBook)
router.get('/:id',bookController.getById)
router.post('/',userController.authorizeAdmin,bookController.save)
module.exports = router;