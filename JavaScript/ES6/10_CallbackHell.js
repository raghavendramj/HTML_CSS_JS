// let add = (a, b) => {
//   return a + b;
// };

// let subtract = (a, b) => {
//   return a - b;
// };

// let multiply = (a, b) => {
//   return a * b;
// };

// let divide = (a, b) => {
//   return a / b;
// };

let operateAdd = (a, b, callBack) => {
  let sum = callBack(a, b);
  console.log("Sum is :- ", sum);
};

let operateSubtract = (a, b, callBack) => {
  let diff = callBack(a, b);
  console.log("Difference is :- ", diff);
};

let operateMultiply = (a, b, callBack) => {
  let prod = callBack(a, b);
  console.log("Product is :- ", prod);
};

let operateDivide = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Division is :- ", result);
};

let operations = (a, b) => {
  // operateAdd(a, b, add);
  operateAdd(a, b, (a, b) => {
    // operateSubtract(a, b, subtract);
    operateSubtract(a, b, (a, b) => {
      // operateMultiply(a, b, mulitply);
      operateMultiply(a, b, (a, b) => {
        // operateDivide(a, b, divide);
        operateDivide(a, b, (a, b) => {
          return a / b;
        });
        return a * b;
      });
      return a - b;
    });
    return a + b;
  });
};

operations(20, 5);
// Sum is :-  25 -> Difference is :-  15 -> Product is :-  100 -> Division is :-  4
