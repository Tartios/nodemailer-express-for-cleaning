const http = require('http');
const express = require('express');
const path = require('path');
const { PORT } = require('./configs/config');
const cors = require('cors');
const Routers = require('./routes/index');
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Routers);
app.listen(PORT, () => {
    console.log(`Listen ${PORT}`);
})