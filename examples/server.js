var health = require('../index');
var express = require('express');

var app = express();
app.use(health.ping)
app.use(app.router);

app.listen(3000);