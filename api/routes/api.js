var express = require('express');
var router = express.Router();
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
        if(err){
            throw err;
        }
        res.json(user)
    })
});




module.exports = router;