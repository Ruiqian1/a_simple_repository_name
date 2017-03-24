var mongoose = require('mongoose');
var users = require('./users');
var schools = require('./schools');

var Schema = mongoose.Schema;

var postsSchema = new Schema ({
    school_id: String,
    user_id: String,
    url: String,
    score: Number
});

var postsModel = mongoose.model('posts', postsSchema);

module.exports = {
    postsModel: postsModel,
    postsSchema: postsSchema
}
