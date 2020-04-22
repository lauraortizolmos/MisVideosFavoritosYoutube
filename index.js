'use strict'

const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();

// routes
const videoRoutes = require('./routes/video');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {   
    //no se pudo en freehostig 
   /* host: 'sql9.freemysqlhosting.net',
    user: 'sql9335152',
    password: 'tQXyBA94kb',
    database: 'sql9335152',
    port : 3306 */

    host: 'remotemysql.com',
    user: '4JAenzzYDe',
    password: 'qAfeArxJvq',
    database : '4JAenzzYDe',
    port: 3306

}, 'single'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', videoRoutes);

// static files
app.use(express.static(path.join(__dirname, '/public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});