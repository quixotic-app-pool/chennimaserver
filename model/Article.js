
// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ArticleSchema = new Schema({
    id: Number,
    title : String,
    body : String,
    img : String
});
module.exports = mongoose.model('Article', ArticleSchema);
