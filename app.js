var express = require('express'),
bodyparser = require('body-parser'),
mongoose = require('mongoose'),
app = express(),
User = require('./models/user');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/family-tree');
console.log('klhasdfkahsdflkjhasfd');

//create a new user
// var david = new User({
//   first_name: "David",
//   email: 'david@cookies.com',
//   meta: {
//     age: 27
//   }
// });

// david.save(function(err){
//   if(err) console.log(err);
//   console.log("User created!");

// User.find({}, function(err, users){
//   if(err) console.log(err);
//   console.log(users);
//   // console.dir(typeof users);
// });

});
User.findOne({email: 'david@cookies.com'}, function(err, user){
  if(err) console.log(err);
  console.log(user);
});

user.findOneAndUpdate({ email: 'david@cookies.com'}, { meta: { age: 37 }}, function(err, user){
  if(err) console.log(err);
  console.log(user);
});

user.findOneAndremove({ email: 'david@cookies.com'}, function(err){
  if(err) console.log(err);
  console.log("User deleted.");
});
