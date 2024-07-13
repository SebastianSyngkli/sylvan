
const express = require('express');
const User =  require('../models/auth')
const secretKey = 'yourSecretKey';
const transporter = require('../utils/sendEmail');

const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const resetToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
  
      const resetLink = `http://194.238.23.2/reset?token=${resetToken}`;
      const mailOptions = {
        from: 'joplangmaring62@gmail.com', // Replace with your email
        to: email,
        subject: 'Reset Password',
        text: `Click this link to reset your password: ${resetLink}`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Failed to send reset password email:', error);
          return res.status(500).json({ message: 'Failed to send reset password email' });
        }
        console.log('Reset password email sent: ' + info.response);
        res.json({ message: 'Reset password email sent.', resetLink });
      });
    } catch (error) {
      console.error('Forgot password error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  module.exports = router;