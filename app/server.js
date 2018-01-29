var express = require("express");
var app     = express();
YAML        = require('yamljs');

render = require('express-render')(app);

app.set('view engine', 'pug')

app.get('/', function(req, res) {
  cohorts = Object.keys(YAML.load('example_names.yml'))
  res.render('cohorts', { title: 'Pick a cohort', cohorts: cohorts })
})

app.get('/cohorts/:cohort', function(req, res){
  var cohort_selection = req.params.cohort
  var students         = YAML.load('example_names.yml');
  var cohort           = students[cohort_selection]
  var random_student   = cohort[Math.floor(Math.random() * cohort.length)]
  var action           = `/cohorts/${cohort_selection}`

  res.render('random_student', { title: 'Pick a student', random_student: random_student, action: action })
})

app.listen(3000);
