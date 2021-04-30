/**
 * =========================================================================================
 * Redoing the question 1 using Construction Function
 */

function Student(firstName, lastName, grades){
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades,
    this.inputNewGrade = function (newGrade) {
        this.grades.push(newGrade);
    },
    this.computeAverageGrade = function () {
        return this.grades.reduce((avg, value, _, { length }) => avg + value / length , 0);
    }
}

let std1 = new Student('Kidus', 'Tekeste', [3.7,4,3.8,4]);
std1.inputNewGrade(3.9);

let std2 = new Student('Daniel', 'Mathew', [2,3,4,1]);
std2.inputNewGrade(2.9);

let std3 = new Student('Andrew', 'Thomson', [3.3,4,3.1,4]);
std3.inputNewGrade(1.9);

let students = [std1, std2, std3];

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].firstName + " " + students[i].lastName}: has average grade of ${students[i].computeAverageGrade()}`);
}