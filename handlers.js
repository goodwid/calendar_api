const mongoose = require('mongoose');
const m = require('moment');
const db = require('./something');

mongoose.connect('mongodb://localhost/calendar');

const handlers = {};

handlers.date = (req, res) => {
  res.send(`${req.params.key} shows ${m()}`);
};


module.exports = handlers;
