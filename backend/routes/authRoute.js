const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');


router.get('/users', authController.getAllUser)

router.get('/register', (req, res) => {
  res.send('register')
})


module.exports = router;