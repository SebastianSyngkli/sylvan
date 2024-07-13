

const express = require('express');
const User = require('../models/auth');
const transporter = require('../utils/sendEmail');

const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken')

const secretKey = 'yourSecretKey';

const router = express.Router();


router.post('/', async (req, res) => {
    const { email, password, name } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      const newUser = new User({ email, password, name });
      await newUser.save();
  
      const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: '1d' });
      const verificationLink = `http://194.238.23.2/api/verify-email?token=${token}`;
  
      const mailOptions = {
        from: 'joplangmaring62@gmail.com', // Replace with your email
        to: email,
        subject: 'Email Verification',
        text: `Click this link to verify your email: ${verificationLink}`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Failed to send verification email:', error);
          return res.status(500).json({ message: 'Failed to send verification email' });
        }
        console.log('Email sent: ' + info.response);
        res.json({ message: 'User registered successfully. Verification email sent.', verificationLink });
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  module.exports = router;