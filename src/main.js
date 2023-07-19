// import express from "express";
// import bodyParser from 'body-parser';
// import path from 'path';
// import {requestTime, logger} from './middlewares.js';
// import indexController from './controllers/adminController.js';
// import adminRouter from './routes/adminRouter.js'
// import indexRouter from './routes/indexRouter.js';
// import {bcryptCheck} from './bcrypt.js';
// import pool from './db/db.js';
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const {requestTime, logger} = require('./middlewares.js');
// const indexController = require('./controllers/adminController.js');
// const adminRouter = require('./routes/adminRouter.js');
// const indexRouter = require('./routes/indexRouter.js');
const bcryptCheck = require('./bcrypt.js');
// const pool = require('./db/db.js');

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`)
});

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'ejs'))

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  // app.use('/', adminRouter);
  // app.use('/', indexRouter); 

// app.get('/features', (req, res) => {
//     res.render('features', {title: 'Features Page!!!!!'})
// })

app.use(express.static(path.resolve(__dirname, './static')))

app.use(requestTime);
app.use(logger);







