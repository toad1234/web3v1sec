var mongoose = require('mongoose');

var ratingSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    movieId:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    }
});

var rating = module.exports = mongoose.model('ratings', ratingSchema);

module.exports.createRating = function (userId,movieId,callback) {
    try {
        rating.create(userId,movieId, callback);
    }
    catch (err){
        if(err.message === "ValidatorError"){

        }
        else{

        }
    }

}