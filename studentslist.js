
var students = [
    { id: 1, name: 'Ram', total: 72, gender: 'Male' },
    { id: 2, name: 'Sheela', total: 75, gender: 'Female' },
];

function findStudentById(id) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }
    return null;
}

function findStudentsByGender(gender) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].gender === gender) {
            result.push(students[i]);
        }
    }
    return result;
}

function addStudent(id, name, total, gender) {
    var newStudent = { id: id, name: name, total: total, gender: gender };
    students.push(newStudent);
}

function deleteStudentById(id) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);
            return;
        }
    }
}

function printStudents() {
    for (var i = 0; i < students.length; i++) {
        console.log('ID: ' + students[i].id + ', Name: ' + students[i].name + ' (' + students[i].gender + '), Total: ' + students[i].total);
    }
}

console.log(findStudentById(1)); 
console.log(findStudentsByGender('Female')); 
addStudent(4, 'ramees', 85, 'Male');
console.log(students);
deleteStudentById(2);
console.log(students); 
printStudents();