//Normal Function
function add(a, b) {
  return a + b;
}

//Function Expression
let funcExpressionAdd = function (a, b) {
  return a + b;
};

//Arrow Function
let arrowAddition = (a, b) => {
  return a + b;
};

//Arrow Function simplified
let arrowAdditionSimplified = (a, b) => a + b;

console.log(add(10, 20));
console.log(funcExpressionAdd(10, 20));
console.log(arrowAddition(10, 20));
console.log(arrowAdditionSimplified(10, 20));
