function addition() {
  console.log("Normal Function");
}

addition();

var additionVar = function () {
  console.log("Function expression");
};

additionVar();

(function (a, b) {
  var res = a * b;
  console.log("result", res);
})(10, 20);



var calculator = (function(){
    function add(a, b) {
        return a + b;
    }
    
    function multiply(a, b) {
        return a * b;
    }
    
    function division(a, b) {
        return a / b;
    }
    
    function subtraction(a, b) {
        return a - b;
    }

    return {
        sum : add,
        prod : multiply,
        divide: division,
        diff : subtraction 
    }
})();

console.log(calculator.sum(10, 20));
console.log(calculator.prod(10, 20));
console.log(calculator.divide(10, 20));
console.log(calculator.diff(10, 20));