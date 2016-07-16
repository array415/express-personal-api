var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
  id: String,
  name: String,
  img: String,
  description: String

});

var Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;
