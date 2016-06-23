var mongoose = require('mongoose');

//Defining the structure of our user collection
var userSchema = new mongoose.Schema({
  ifirst_name: String,
  last_name: String,
  email: {type: String, requiredL true, unuque: true },
  meta: {
    age; Number,
    website: String,
    address: String,
    country: String
  },
  created_at: Date,
  updated_at: Date

});

//registering our schema with mongoose / mongo
var User = mongoose.model('User', userSchema);

module.exports = User
