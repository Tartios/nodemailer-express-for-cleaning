const router = require('express').Router();
const mailer = require('../controllers/Nodemailer');

router.post('/send', mailer);

module.exports = router;