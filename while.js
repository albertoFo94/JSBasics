var students = ["Maria", "Mariza", "Daniela", "Sofia"];

function greetStudents(student) {
  console.log(`Hi, ${student}`);
}

while(students.length > 0) {
  console.log(students);
  var student = students.shift();
  greetStudents(student);
}