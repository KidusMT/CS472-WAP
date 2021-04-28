  


/**
 * Correct Answer: Using "bind"
 */
 let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();




/**
 * ==================================Below is for self study=======================================
 * Options 1: Using Lambda Expression
 * 
 * change the below code
 * this.students.forEach(function(student) {
 *           console.log(this.title + ": " + student);
 *       });
 * with lambda expression which the "this" will be refering to the outer
 * method's(showList: function()), outer lexical environment      
 */
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach(student => console.log(this.title + ": " + student));
    }
};
group.showList();


/**
 * Options 2
 * Using "self pattern"
 */
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};
group.showList();