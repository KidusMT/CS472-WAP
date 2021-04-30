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