//Value types
var a = 10;
var b = a;
a = 30;
console.log("A :", a);
console.log("B :", b);


//Reference types
var arr1 = [10, 20, 30];
var arr2 = arr1;
arr1.push(52);

console.log("Arr1: ", arr1);
console.log("Arr2: ", arr2);    