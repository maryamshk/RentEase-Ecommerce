const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');


router.get('/users', authController.getAllUser)
router.post('/register', authController.createUser)
router.post('/login', authController.loginUser)
router.get('/logout/:id', authController.logoutUser)

module.exports = router;