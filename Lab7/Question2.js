/**
 * Correct Answer: Using "bind" without lambda
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
 * Options 1: Using only Lambda Expression
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

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        self = this;
        let f = student => student => console.log(self.title + ": " + student);
        this.students.forEach(f.call(this));
    }
};
group.showList();

/**
 * Optional 3 With "bind" and lambda expression
 */
 let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        let f = student => console.log(this.title + ": " + student);
        this.students.forEach(f.bind(this));
    }
};
group.showList();

/**
 * Optional 4 With "call" and lambda expression
 */
 let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        let f = student => student => console.log(this.title + ": " + student);
        this.students.forEach(f.call(this));
    }
};
group.showList();

/**
 * Optional 5 With "apply" and lambda expression
 */
 let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        let f = student => student => console.log(this.title + ": " + student);
        this.students.forEach(f.apply(this));
    }
};
group.showList();