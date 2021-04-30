let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade : function () {
        return this.grades.reduce((avg, value, _, { length }) => avg + value / length , 0);
    }
}
/**
 * =========================================================================================
 * Creating an array of three studetns which are created using Object.create();
 * Then computing their average grades for all students in the array.
 */
let std1 = Object.create(student);
std1.firstName = 'Kidus';
std1.lastName = 'Tekeste';
std1.grades = [3.7,4,3.8,4];

let std2 = Object.create(student);
std2.firstName = 'Daniel';
std2.lastName = 'Mathew';
std2.grades = [2,3,4,1];

let std3 = Object.create(student);
std3.firstName = 'Andrew';
std3.lastName = 'Thomson';
std3.grades = [3.3,4,3.1,4];

let students = [std1, std2, std3];

let avgGrades = 0;
for(let i = 0; i< students.length; i++){
    avgGrades+=students[i].computeAverageGrade();
}

console.log(avgGrades/students.length);