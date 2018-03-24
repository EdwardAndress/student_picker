var express = require("express")
var app     = express()
var path = require('path')
app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'pug')

YAML   = require('yamljs')
render = require('express-render')(app)

app.get('/', function(req, res) {
  cohorts = Object.keys(YAML.load('students.yml'))
  res.render('cohorts', { title: 'Pick a cohort', cohorts: cohorts })
})

app.get('/cohorts/:cohort', function(req, res){
  var students         = YAML.load('students.yml')
  var cohort_selection = req.params.cohort
  var cohort           = students[cohort_selection]
  res.render('random_student', { title: 'Pick a student', cohort: cohort })
})

app.listen(3000)
