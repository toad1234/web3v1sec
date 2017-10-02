var express = require('express');
var router = express.Router();

person = require('../models/persons.js');
router.get('/api/persons',function (req,res) {
    person.getPersons(function (err, persons) {
        if(err){
            throw "heck";
        }
        res.json(persons);
    })
});
module.exports = router;