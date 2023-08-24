const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
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
        from: 'your_email@example.com',
        to: 'your_email@example.com', // Your email address
        subject: 'New Inquiry from Website',
        text: `Name: ${name}\nContact: ${contact}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
