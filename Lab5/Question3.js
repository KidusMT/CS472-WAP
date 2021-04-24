// Create a constructor function Employee with properties: firstName, lastName, birthdate Date type, 
// methods: getFullName(), getAge()
function Employee(first, last, bdate) {
    this.firstName = first;
    this.lastName = last;
    this.birthdate = bdate;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    this.getAge = function () {
        var years = (new Date().getFullYear() - this.birthdate.getFullYear());
        return years;
    };
  };

  // Create an array with a few Employee objects with different firstName, lastName, birthdate
  let kidus = new Employee('Kidus', 'Tekeste', new Date(1996, 1, 15));
  let mark = new Employee('Mark', 'Johnson', new Date(2004, 10, 5));
  let john = new Employee('John', 'Doe', new Date(2000, 4, 15));
  let daniel = new Employee('Daniel', 'Simpson', new Date(1997, 2, 20));

  // creating the array with Employee objects
  let arr = [kidus, mark, john, daniel];


  // Find if there is any employee which age is greater than 20
  let result1 = arr.filter(e=>e.getAge()>20);
  console.log(result1);

  
  // Return a String array which contains the full name of employee and born after 2000
  let result2 = arr.filter(e=>e.birthdate.getFullYear()>2000).map(e=>e.getFullName());
  console.log(result2);