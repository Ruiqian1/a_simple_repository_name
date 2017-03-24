var express = require('express')
var queries = require('./models/queries.js')

var app = express()

app.use(express.static('./public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/:school', function(req, res) {
    res.send('You requested ' + req.params.school)
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
