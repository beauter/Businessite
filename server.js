const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail
    auth: {
        user: 'marajibeauter0@gmail.com',
        pass: '@maraji@123@5905'
    }
});

app.post('/submit-form', (req, res) => {
    const { name, contact, message } = req.body;

    const mailOptions = {
        from: 'marajibeauter0@gmail.com',
        to: 'officialbeauter@gmail.com', // Your email address
        subject: 'New Enquiry from YRN TECH KENYA',
        text: `Name: ${name}\nContact: ${contact}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            res.json({ success: false });
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
