var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var database = require('./config/database');
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
var router = express.Router();

var port     = process.env.PORT || 8888;
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

var Article = require('./models/Article');

mongoose.connect(database.url);

router.route('/api/article')
  .get(function(req, res) {
   // use mongoose to get all todos in the database
   Article.find(function(err, article) {
   // if there is an error retrieving, send the error otherwise send data
   if (err)
   res.send(err)
   res.json(article); // return all employees in JSON format
   });
  });

app.listen(port);
console.log("App listening on port : " + port);
