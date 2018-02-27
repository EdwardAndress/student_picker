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
  var random_student   = cohort[random_index(cohort)]
  var action           = `/cohorts/${cohort_selection}`

  res.render('random_student', { title: 'Pick a student', random_student: random_student, action: action })
})

function random_index(cohort) {
  // shuffle and then pick from the start
  return Math.floor(Math.random() * cohort.length)
}

app.listen(3000)
