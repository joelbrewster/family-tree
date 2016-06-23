var express = require('express'),
bodyparser = require('body-parser'),
mongoose = require('mongoose'),
app = express(),
User = require('./models/user');



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/family-tree');

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

// User.findOne({email: 'david@cookies.com'}, function(err, user){
//   if(err) console.log(err);
//   console.log(user);
// });

// User.findOneAndUpdate({ email: 'david@cookies.com'}, { meta: { age: 37 }}, function(err, user){
//   if(err) console.log(err);
//   console.log(user);
// });

// User.findOneAndremove({ email: 'david@cookies.com'}, function(err){
//   if(err) console.log(err);
//   console.log("User deleted.");
// });


// ===============


app.get('/all', function(req, res){
  User.find({}, function(err, users){
    res.json(users);
  });
});

app.get('/create', function(req, res){
  var user = new User(req.query);
  user.save(function(err, yser){
    if(err) console.log(err);
    res.json(users);
  });
});

app.get('/delete/:id',function(req, res){
  res.send(req.params);
  User.findoneAndRemove({'_id' : req.params.id}, function(err){
    if(err) console.log(err);
    res.send(err);
  });
});

app.listen(3000);
