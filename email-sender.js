const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'geebasz01@gmail.com',
        pass: 'Pproff110'
    }
});

const mailOptions = {
    from: 'geebasz01@gmail.com',
    to: 'godwinmobile@gmail.com',
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