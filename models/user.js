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
//define a pre save hook function
userSchema.pre('save', function(next){
  var now = new Date();
  this.updated_at = now;
  if(!this.created_at){
    this.created_at = now;
  }
  next();
});

//registering our schema with mongoose / mongo
var User = mongoose.model('User', userSchema);

module.exports = User;
