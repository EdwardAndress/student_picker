var express = require("express");
var app = express();
YAML = require('yamljs');

render = require('express-render')(app);

app.set('view engine', 'pug')

app.get('/', function(req, res){
  var students = YAML.load('example_names.yml');
  var random_student = students.october[Math.floor(Math.random()*students.october.length)]
  res.render('index', { title: 'Student picker', random_student: random_student })
})

app.listen(3000);
