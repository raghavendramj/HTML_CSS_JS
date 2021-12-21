function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getName = function () {
  return this.firstName + " " + this.lastName;
};

var raghav = new Person("Raghav", "Anand");
console.log(raghav.getName());

console.log(raghav instanceof Person);
console.log(raghav instanceof Object);

class PersonES6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

let object1 = new PersonES6("John", "Doe");
console.log(object1.getName());
console.log(typeof PersonES6);
console.log(typeof object1);
console.log(object1 instanceof PersonES6);
console.log(object1 instanceof Object);