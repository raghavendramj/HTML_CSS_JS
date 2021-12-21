setTimeout(function () {
  console.log("Inside setTimeout");
}, 2000);


function testSetTimeout(){
    console.log("1"); // Main Thread
    setTimeout(function () {
      console.log("2");
    }, 2000);
    setTimeout(function () {
      console.log("3");
    }, 0);
    console.log("4"); // Main Thread
}

testSetTimeout();


//Problem statement
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("Value printed ", i);
    }, 1000);
}

//Using IIFE fixed the problem
for (var i = 0; i < 5; i++) {
    (function(j){
       setTimeout(function () {
            console.log("Value printed ", j);
       }, 1000);
    })(i);
}

//Using let fixed the problem
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("Value printed ", i);
    }, 1000);
}