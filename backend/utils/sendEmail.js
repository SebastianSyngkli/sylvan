const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'joplangmaring62@gmail.com', // Replace with your email
        pass: 'Ineedjesus' // Replace with your email password
    }
});

// Export transporter
module.exports = transporter;