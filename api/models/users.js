var mongoose = require('mongoose');


var personSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    }
});
var person = module.exports = mongoose.model('persons', personSchema);

module.exports.getPersons = function (callback, limit) {
    person.find(callback).limit(limit);
}

module.exports.addUser = function (user,callback) {
    console.log("creating user");
    person.create(user, callback);
    console.log("done creating user");
}