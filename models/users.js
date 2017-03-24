var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var usersSchema = new Schema ({
    username: String,
    type: Number,
    score: Number,
    posts: Array
})

var usersModel = mongoose.model('users', usersSchema);

module.exports = {
    usersModel: usersModel,
    usersSchema: usersSchema
}
