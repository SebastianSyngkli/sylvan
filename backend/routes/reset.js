const express = require('express');
const User = require('../models/auth');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';

router.use(express.json());

router.post('/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }

    // Verify and decode the token
    let decoded;
    try {
      decoded = jwt.verify(token, secretKey);
    } catch (error) {
      if (error.name === 'JsonWebTokenError' && error.message === 'jwt malformed') {
        return res.status(401).json({ message: 'Invalid token format' });
      } else if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token has expired' });
      } else {
        return res.status(401).json({ message: 'Invalid token' });
      }
    }

    // Proceed if token is valid
    const userId = decoded.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user's password
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
