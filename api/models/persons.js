var mongoose = require('mongoose');


var personSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String
    }
});
var person = module.exports = mongoose.model('persons', personSchema);

module.exports.getPersons = function (callback, limit) {
    person.find(callback).limit(limit);
}