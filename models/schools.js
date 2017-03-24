var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolsSchema = new Schema ({
    name: String,
    banner: String,
    abbr: String,
    posts: Array
});

var schoolsModel = mongoose.model('schools', schoolsSchema);

module.exports = {
    schoolsModel: schoolsModel,
    schoolsSchema: schoolsSchema
}
