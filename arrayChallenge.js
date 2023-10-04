let students = ['Jim','Mark','Sally','Megan','Joe'];
console.log(students.length);

let studentsPopped = students.pop();
console.log(studentsPopped);
console.log(students);

students.push('Trevor');
console.log(students);

students.shift();
console.log(students);

students.unshift('Anthony');
console.log(students);

students.splice(2, 1, 'Kate');
console.log(students);

console.log(students.includes('John'));

console.log(students.indexOf('Kate'));

let reversedStudents = students.reverse();
console.log(reversedStudents);
console.log(reversedStudents[reversedStudents.length-1]);

let firstIndexEqualsLast = (students[0] == students[students.length-1]);
console.log(firstIndexEqualsLast);