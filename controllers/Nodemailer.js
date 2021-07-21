const nodemailer = require('nodemailer');
const creds = require('../configs/config');
const transport = {
    // host: 'smtp.yandex.ru',
    // port: 465,
    // sequre: true,
    // auth: {
    //     user: creds.USER,
    //     pass: creds.PASSWORD
    // },
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'victor.funk@ethereal.email',
        pass: '2ZTtJS6EGzM58QJr2j'
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
        console.log(mail);
        if (err) {
            return console.log(err);
        }
        return callback;
    })
}
const mailer = (req, res) => {
    console.log(`REQ ${req.body.name}`)
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message}`;
    const mail = {
        from: req.body.name,
        to: 'tartios@yandex.ru',
        subject: 'НОВЫЙ ЗАПРОС',
        text: content,
    }
    postPush(mail);
    res.send(content);//тут ответа нет от сервера, надо что-то сделать
}
module.exports = mailer;