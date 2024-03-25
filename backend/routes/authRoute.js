const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');
const { body, validationResult } = require('express-validator')



router.get('/users', authController.getAllUser)
router.post('/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 })
  ],
  authController.createUser)
router.post('/loginuser', authController.loginUser)
router.get('/logout/:id', authController.logoutUser)

module.exports = router;