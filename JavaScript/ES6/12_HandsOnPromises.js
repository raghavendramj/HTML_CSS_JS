let operateAdd = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length <= 1) {
      reject("Not enough numbers to add.");
    } else {
      let sum = arr[0] + arr[1];
      console.log("Sum is :- ", sum);
      resolve(arr);
    }
  });
};

let operateSubtract = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length <= 1) {
      reject("Not enough numbers to subract.");
    } else {
      let diff = arr[0] - arr[1];
      console.log("Difference is :- ", diff);
      resolve(arr);
    }
  });
};

let operateMultiply = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length <= 1) {
      reject("Not enough numbers to multiply.");
    } else {
      let prod = arr[0] * arr[1];
      console.log("Product is :- ", prod);
      resolve(arr);
    }
  });
};

let operateDivide = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length <= 1) {
      reject("Not enough numbers to divide.");
    } else if (arr[1] == 0) {
      reject("Can't divide a number by zero.");
    } else {
      let result = arr[0] / arr[1];
      console.log("Division is :- ", result);
      resolve(arr);
    }
  });
};

// operateAdd([25, 5]).then(
//   (arr) => console.log("Operation completed : ", arr),
//   (error) => console.log("Error occured :- ", error)
// );

operateAdd([25, 0])
  .then((arr) => operateSubtract(arr))
  .then((arr) => operateMultiply(arr))
  .then((arr) => operateDivide(arr))
  .catch((error) => console.log("Error occured :- ", error));
