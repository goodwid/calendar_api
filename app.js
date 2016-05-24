const express = require ('express');
const app = express();
const handlers = require('./handlers');

app.get ('/calendar/api/:key/dates', handlers.date);

app.listen(process.argv[2] || process.env.port || 8080);

module.export = app;
