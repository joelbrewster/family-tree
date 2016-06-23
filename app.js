var express = require('express'),
bodyparser = require('body-parser'),
mongoose = require('mongoose'),
app = express();
User = require('./models/user');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/family-tree');
