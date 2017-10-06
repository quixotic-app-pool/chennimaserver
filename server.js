var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var database = require('./config/Database');
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)


var port     = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

var Article = require('./models/Article');
var data = require('./dummy.js');

mongoose.connect(database.url);

var init = function(){
    data.forEach(function(item){
      var instance = new Article({
        title: item.title,
        body: item.body
      })
      instance.save(function(err){
        if(err) {
          throw err;
        }
        console.log('User saved successfully!');
      })
    }
}

init();

app.get('/', function(req, res){
  res.send('server is up and running!')
})
app.get('/api/article', function(req, res) {
   // use mongoose to get all todos in the database
   Article.find(function(err, article) {
   // if there is an error retrieving, send the error otherwise send data
   if (err){
     res.send(err)
   } else {
     res.json(article);
   }
   });
  });


app.listen(port);
console.log("App listening on port : " + port);
