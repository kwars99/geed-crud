var express = require('express');

var app = express();
app.get('/', function (req, res) {
    res.send('hello world')
}) 

app.get('/ping', function(req, res){
    res.send('pong')
})
console.log("the server has started on localhost 8080");
app.listen('8080');

  