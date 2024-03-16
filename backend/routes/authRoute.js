const { Router } = require('express');
const router = Router();

router.get('/users', (req, res, next) => {
  res.send('users')
})

router.get('/register', (req, res) => {
  res.send('register')
})


module.exports = router;