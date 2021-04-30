/**
 * =========================================================================================
 * Add a new method named sort() without parameters in built - in constructor function Array.
 * It'll sort all elements in the array in ascending order.
 */

 function Student(firstName, lastName, grades){
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = [],
    this.inputNewGrade = function (newGrade) {
        this.grades.push(newGrade);
    },
    this.computeAverageGrade = function () {
        return this.grades.reduce((avg, value, _, { length }) => avg + value / length , 0);
    }
}

// https://stackoverflow.com/a/1063027/6021740
Student.prototype.sort = function(){ return this.grades.sort((a, b) => a - b)}; // For ascending sort

let std1 = new Student('Kidus', 'Tekeste', [3.7,4,3.8,4]);
std1.inputNewGrade(3.9);

let std2 = new Student('Daniel', 'Mathew', [2,3,4,1]);
std2.inputNewGrade(2.9);

let std3 = new Student('Andrew', 'Thomson', [3.3,4,3.1,4]);
std3.inputNewGrade(1.9);

let students = [std1, std2, std3];

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].firstName + " " + students[i].lastName}: has sorted grades of ${students[i].sort()}`);
}