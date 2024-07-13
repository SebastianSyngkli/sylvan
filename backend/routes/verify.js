

const express = require('express');
const User =  require('../models/auth')
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';

router.get('/', async (req, res) => {
    const token = req.query.token;
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }
  
    try {
      const decoded = jwt.verify(token, secretKey);
      const userId = decoded.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.verified = true;
      await user.save();
      res.redirect('http://194.238.23.2/login?verified=true');
    } catch (error) {
      console.error('Email verification error:', error);
      res.status(401).json({ message: 'Invalid or expired token' });
    }
  });
  module.exports = router;