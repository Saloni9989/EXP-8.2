const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');
const permit = require('../middleware/roleMiddleware');

router.post('/register', register);
router.post('/login', login);

router.get('/admin', verifyToken, permit('Admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

router.get('/moderator', verifyToken, permit('Moderator', 'Admin'), (req, res) => {
  res.json({ message: 'Welcome Moderator!' });
});

router.get('/user', verifyToken, permit('User', 'Moderator', 'Admin'), (req, res) => {
  res.json({ message: 'Welcome User!' });
});

module.exports = router;
