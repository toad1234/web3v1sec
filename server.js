var express = require('express');
var routes = require('./api/routes/api');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test1');
var db = mongoose.connection;


var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
app.use(require('./api/routes/api.js'));


app.get('/', function (req,res) {
    res.send('working');
})
app.listen(3000);
console.log('Api on 3000');