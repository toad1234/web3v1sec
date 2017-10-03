var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var routes = require('./api/routes/api');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');
var db = mongoose.connection;





// Routes
//app.use(require('./api/routes/api.js'));


app.get('/', function (req,res) {
    res.send('working');
})
app.listen(3000);
console.log('Api on 3000');


person = require('./api/models/users.js');
//var router = express.Router();
//router.use(bodyParser.json());
//var app = express();
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
app.get('/api/persons',function (req,res) {
    person.getPersons(function (err, persons) {
       // if(err){
       //     console.log(err.message)
      //  }
        res.json(persons);
    })
});


app.post('/api/persons',function (req,res) {
    console.log("user is bla");
    var user = req.body;
    person.addUser(function (err, user) {
        console.log("looking for errors");
        if(err){
            console.log(err.message);
        }
        console.log("sending response");
        res.json(user);
    })
});