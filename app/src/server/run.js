var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
require('./libraries/console_log.js');
require('./libraries/database_functions.js');

app.use(express.static('/app/src/'));
app.all('/', function(req, res){
    res.sendFile('index.html', {root: '/app/src/'});
});



http.listen(3000, function () {
    console.log('Listening on *:3000');
});


