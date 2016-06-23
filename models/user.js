var mongoose = require('mongoose');

//Defining the structure of our user collection
var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {type: String, required: true, unique: true },
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String
  },
  created_at: Date,
  updated_at: Date

});
//Define a custom method for the user model.

userSchema.methods.sayHello = function(){
  console.log('Hi ' + this.first_name);
}

//registering our schema with mongoose / mongo
var User = mongoose.model('User', userSchema);

module.exports = User;
