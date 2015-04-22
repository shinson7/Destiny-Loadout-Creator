 function Person(age, weight) { //Super-class
     this.age = age;
     this.weight = weight;
 }

 Person.prototype.getInfo = function() { //Prototype Method base for my polymorphic method
     return "I am " + this.age + " years old " +
         "and weighs " + this.weight + " kilo.";
 };

 function Employee(age, weight, salary) { //Sub-Class
     Object.defineProperty(this, 'salary', { //Define Property
         value: salary
     });
     Person.call(this, age, weight); //.call() method
 }

 Employee.prototype = Object.create(Person.prototype); //Object.create based on the prototype for the person #Redundant but whatever

 Employee.prototype.getInfo = function() { //Prototype method polymorphic
     return "I am " + this.age + " years old " +
         "and weighs " + this.weight + " pounds " +
         "and earns " + this.salary + " dollars.";
 };

 function Student(grade, school, age, weight) { //Sub-Class
     Object.defineProperty(this, 'grade', { //Define Property
         value: grade
     });
     Object.defineProperty(this, 'school', { //Define Property
         value: school
     });
     Person.call(this, age, weight); //.call() method
     Object.defineProperty(this, 'findWeight', {
         get: function() {
             return this.weight;
         }
     }); //Getter function
 }

 Student.prototype = Object.create(Person.prototype); //Object.create

 Student.prototype.getInfo = function() {
     return "I am " + this.age + " years old and weigh " + this.weight + " pounds and go to " + this.school + " and in " + this.grade + " grade.";
 }; //Polymorphic


 var person = new Person(21, 130); //New Instance
 var employee = new Employee(43, 140, 50000); //New Instance
 var student = new Student("9th", "Eastside Preparatory School", 15, 138); //New Instance
 console.log(person.getInfo()); //polymorphic method call
 console.log(employee.getInfo()); //polymorphic method call
 console.log(student.getInfo()); //polymorphic method call