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

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    console.log('Server is ready to take messages');
});

router.post('/send', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message}`;
    
    const mail = {
        from: name,
        to: 'tartios@yandex.ru',
        subject: 'ТЕМА ПИСЬМА',
        text: content,
    }

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

});