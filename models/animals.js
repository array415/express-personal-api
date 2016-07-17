var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
  name: String,
  gif: String,
  fact: String,
  endangered: Boolean
});

var Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;
