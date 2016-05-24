const mongoose = require('mongoose');
const m = require('moment');

mongoose.connect('mongodb://localhost/calendar');

const handlers = {};

handlers.date = (req, res) => {
  res.send(m());
};


module.exports = handlers;
