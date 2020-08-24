// Function to find average of all students
function average(array) {
  var sumOfMarks = 0;
  for(var i = 0; i < array.length; i++) {
      sumOfMarks += array[i].grade;
  }
  var avgResult = sumOfMarks / array.length;
  return avgResult;
}

// Passing Students
function passingStudents(array) {
    var passing = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i].grade >= 50)
        passing.push(array[i]);
    }
    return passing;
}

// Failing Students
function failingStudents(array) {
    var failing = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i].grade < 50)
        failing.push(array[i]);
    }
    return failing;
}



function checkingGrade(student) {
    return student.grade >= 0;
}



var students = [
  {
    name: "student 1",
    DOB: "01/07/2001",
    grade: 89
  },
  {
    name: "student 2",
    DOB: "02/05/2000",
    grade: 75
  },
  {
    name: "student 3",
    DOB: "10/24/1999",
    grade: 40
  },
  {
    name: "student 4",
    DOB: "06/17/1998",
    grade: 78
  },
  {
    name: "student 5",
    DOB: "11/15/2001",
    grade: 80
  },
  {
    name: "student 6",
    DOB: "04/06/1998",
    grade: 92
  },
  {
    name: "student 7",
    DOB: "02/19/1997",
    grade: 70
  },
  {
    name: "student 8",
    DOB: "12/20/2002",
    grade: 32
  },
  {
    name: "student 9",
    DOB: "08/29/1999",
    grade: 85
  },
  {
    name: "student 10",
    DOB: "11/15/2001",
    grade: 73
  }
];

// Calling array of students
console.log(students);

// Calling Class Average
var studentAvg = average(students);
console.log("The class average is " + studentAvg);

// Calling passing students
var passedStudents = passingStudents(students);
//console.log(passedStudents);
console.log("The number of students passing is: " + passedStudents.length);

// Calling failing students
var failedStudents = failingStudents(students);
//console.log(failedStudents);
console.log("The number of students failing is: " + failedStudents.length);

//Checking Grades
//var passed = students.filter(checkingGrade);
//console.log(passed);

