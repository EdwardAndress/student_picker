window.addEventListener('load', function() {
  var button = document.getElementById('pick_a_student')
  button.addEventListener("click", pickStudent)
})

function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}

function getStudentNames() {
  var studentLiNodes    = document.getElementsByTagName('li')
  var studentLiArray    = Array.from(studentLiNodes)
  var studentNamesArray = studentLiArray.map(function(li) { return( li.innerHTML )})
  return studentNamesArray
}

function pickStudent() {
  previousPick = document.getElementById('picked')
  if(previousPick) { previousPick.remove() }
  studentNames      = getStudentNames()
  randomStudentName = studentNames[randomIndex(studentNames.length)]
  studentElement    = getStudentElement(randomStudentName)
  studentElement.id = 'picked'
}

function getStudentElement(studentName) {
  return document.getElementById(studentName.replace(/ /g, ''))
}
