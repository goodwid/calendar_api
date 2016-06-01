const express = require ('express');
const app = express();
const morgan = require('morgan');
const users = require('../routes/users');
const auth = require('../routes/auth');
const dates = require('../routes/dates');
const ensureAuth = require('./ensureAuth');

app.use(morgan('dev'));

app.use('/auth', auth);
app.use('/date', dates);
app.use ('/users', ensureAuth, users);

app.listen(process.argv[2] || process.env.port || 8080);

module.export = app;
