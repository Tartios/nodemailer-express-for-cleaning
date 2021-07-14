const nodemailer = require('nodemailer');
const creds = require('./config');
const transport = {
    host: 'smtp.yandex.ru',
    port: 465,
    sequre: true,
    auth: {
        user: creds.USER,
        password: creds.PASSWORD
    },
}
const transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log('Server is ready to take messages');
// });
const postPush = () => {
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail',
            })
        }
        res.json({
            status: 'ok',
        })
    })
}

module.exports = postPush;