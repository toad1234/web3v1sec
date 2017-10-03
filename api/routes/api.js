var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
person = require('../models/users.js');

router.get('/persons', function (req, res) {
    person.getPersons(function (err, persons) {
        if (err) {
            res.send(err.message);
        }
        res.json(persons);
    })
});

router.post("/persons", function (req, res) {
    var user = req.body;
    person.createPerson(user, function (err,user) {
        if (err) {
            console.log('Error Inserting New Data');
            if (err.name == 'ValidationError') {
                for (field in err.errors) {
                    console.log(err.errors[field].message);
                }
            }
            res.send(400);
        }
        else {
            res.json(user);
        }
    })
});




module.exports = router;