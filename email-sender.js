const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'geeba1@gmail.com',
        pass: '1234567hgsr'
    }
});

const mailOptions = {
    from: 'geeba1@gmail.com',
    to: 'godwinmoe@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
