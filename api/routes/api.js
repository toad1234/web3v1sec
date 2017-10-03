var express = require('express');
var bodyParser = require('body-parser');
person = require('../models/users.js');
var router = express.Router();
//router.use(bodyParser.json());
//var app = express();
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
router.get('/api/persons',function (req,res) {
    person.getPersons(function (err, persons) {
        if(err){
            throw "heck";
        }
        res.json(persons);
    })
});


router.post('/api/persons',function (req,res) {
    var user = req.body;
    person.addUser(function (user, err) {
        res.json(user);
    })
});

module.exports = router;