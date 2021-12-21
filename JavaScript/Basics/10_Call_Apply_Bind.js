function add(a, b) {
  return a + b;
}

console.log("Sum is ", add(10, 20));

function multiplyThreeNumbers(c) {
  return this.a * this.b * c;
}

multiplyThreeNumbers.call({ a: 10, b: 20 }, 10);

var car = {
  name: "car",
  start: function () {
    console.log("Start the " + this.name);
  },
  speedup: function () {
    console.log("Speed up the " + this.name);
  },
  stop: function () {
    console.log("Stop the " + this.name);
  },
};

const aircraft = {
  name: "aircraft",
  fly: function () {
    console.log("Flying the ", this.name);
  },
};

car.start.call(car);
car.start.call(aircraft);

aircraft.fly.call(aircraft);
aircraft.fly.call(car);

function mulitply(a, b) {
  return this.c * this.d * a * b;
}
var obj1 = {c: 2, d: 3};
var obj2 = {c: 4, d: 5};
var obj3 = {c: 6, d: 7};

console.log("Call -> ");

console.log(mulitply.call(obj1, 2, 8));
console.log(mulitply.call(obj2, 2, 8));
console.log(mulitply.call(obj3, 2, 8)); 

console.log("Apply -> ");


console.log(mulitply.apply(obj1, [2, 8]));
console.log(mulitply.apply(obj2, [2, 8]));
console.log(mulitply.apply(obj3, [2, 8])); 


var boundedVar = mulitply.bind(obj1);
boundedVar(2, 5);



function add(a){
    return this.b + a;
}

var add10 = add.bind({b: 10});