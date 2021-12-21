let add = (a, b) => {
  return a + b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  return a / b;
};

let operate = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Result is :- ", result);
};

let operations = (a, b) => {
  operate(a, b, divide);
};

operations(20, 5);
