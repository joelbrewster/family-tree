var express = require('express'),
bodyparser = require('body-parser'),
mongoose = require('mongoose'),
app = express();
User = require('./models/user');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/family-tree');


//create a new user
var david = new User({
  first_name: "David",
  email: 'david@cookies.com',
  meta: {
    age: 27
  }
});

david.save(function(err){
  if(err) console.log(err);
  console.log("User created!");

});
