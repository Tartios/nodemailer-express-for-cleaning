const nodemailer = require('nodemailer');
const creds = require('./config');
const transport = {
    // host: 'smtp.yandex.ru',
    // port: 465,
    // sequre: true,
    // auth: {
    //     user: creds.USER,
    //     password: creds.PASSWORD
    // },
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'victor.funk@ethereal.email',
        password: '2ZTtJS6EGzM58QJr2j'
    },
}
const transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log('Server is ready to take messages');
// });
const postPush = mail => {
    transporter.sendMail(mail, (err, callback) => {
        if (err) {
            return console.log(err);
        }
        console.log(callback);
    })
}

module.exports = postPush;