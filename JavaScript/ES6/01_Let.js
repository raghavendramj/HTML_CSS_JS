function testVar() {
    var num1 = 10;
    console.log("First Num1 ->", num1);
  
    var num1 = 20;
    console.log("Again Num1 ->", num1);
  }


  function testLet2() {
    let x = 10;
    if (x == 10) {
      let x = 20;
      console.log("Inside if block : x  ->", x);
    }
    console.log("Outside if block : x  ->", x);
  }