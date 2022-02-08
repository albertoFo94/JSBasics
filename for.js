var students = ["Maria", "Alberto", "Rosa", "Daniel"];

function greetStudents(student) {
  console.log(`Hi, ${student}`);
}

for (var i = 0; i < students.length; i ++) {
  greetStudents(students[i]);
}

for(var student of students) {
  greetStudents(student);
}