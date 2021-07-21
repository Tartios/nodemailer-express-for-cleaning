require('dotenv').config();

const { USER, PASSWORD } = process.env;
const user = USER;
const pass = PASSWORD;
const port = 3002;
module.exports = {
    USER: user,
    PASSWORD: pass,
    PORT: port,
};