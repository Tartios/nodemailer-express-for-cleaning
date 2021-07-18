const http = require('http');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const postman = require('./Nodemailer');
const app = express()
app.use(cors());
app.use(express.json());
//отдельный модуль
router.post('/send', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message}`;
    const mail = {
        from: req.body.name,
        to: 'tartios@yandex.ru',
        subject: 'ТЕМА ПИСЬМА',
        text: content,
    }
    postman(mail);
    // console.log(res);
    // console.log(content);
});
//вот это вот все
app.use('/', router);
app.listen(3002)