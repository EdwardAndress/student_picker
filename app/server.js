var express = require("express");
var app = express();
YAML = require('yamljs');

render = require('express-render')(app);

app.set('view engine', 'pug')

app.get('/', function(req, res) {
  cohorts = ['October', 'November', 'December']
  res.render('cohorts', { title: 'Pick a cohort', cohorts: cohorts })
})

app.get('/october', function(req, res){
  var students = YAML.load('example_names.yml');
  var random_student = students.october[Math.floor(Math.random()*students.october.length)]
  var action = '/october'
  res.render('random_student', { title: 'Pick a student', random_student: random_student, action: action })
})

app.get('/november', function(req, res){
  var students = YAML.load('example_names.yml');
  var random_student = students.november[Math.floor(Math.random()*students.november.length)]
  var action = '/november'
  res.render('random_student', { title: 'Pick a student', random_student: random_student, action: action })
})

app.listen(3000);
