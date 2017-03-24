var mongoose = require('mongoose');
var users = require('./users');
var schools = require('./schools');
var posts = require('./posts');

mongoose.connect('mongodb://memeapp:memeapp123@ds137220.mlab.com:37220/memeapp');

var usersModel = users.usersModel;
var schoolsModel = schools.schoolsModel;
var postsModel = posts.postsModel;

// Create a normal (type 0) user
function create_new_user(username) {
    var new_user = new usersModel();
    new_user.username = username;
    new_user.type = 3;
    new_user.score = 0;
    new_user.posts = [];
    new_user.save(function(err) {
        if (err) throw err;
    });
    console.log("Created a new user");
}

// Create a new school
function create_new_school(name, banner, abbr) {
    var new_school = new schoolsModel();
    new_school.name = name;
    new_school.banner = banner;
    new_school.abbr = abbr;
    posts = [];
    new_school.save(function(err) {
        if (err) throw err;
    });
    console.log("Created a new school");
}

// Create a new post
function insert_new_post(/*school_id, user_id,*/ url) {
    var new_post = new postsModel();
    new_post.school_id = school_id;
    new_post.user_id = user_id;
    new_post.url = url;
    new_post.score = 0;
    new_post.save(function(err) {
        if (err) throw err;
    });
    console.log("Created a new post");
}

module.exports = {
    create_new_user: create_new_user,
    create_new_school: create_new_school,
    insert_new_post: insert_new_post
}
