function arrayDest() {
  function getScores() {
    return [45, 55, 20, 30, 56, 78, 12, 62];
  }

  let scores = getScores();

  let x = scores[2],
    y = scores[5],
    z = scores[7];
  console.log("X =", x);
  console.log("Y =", y);
  console.log("Z =", z);

  console.log("\n************ Destructed Array Values **********************");
  let [a, b, c, ...others] = getScores();
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
  console.log("others =", others);
}

// arrayDest();

function arrayDestDefaultValues() {
  let [a, b = 2, c = 3] = [10];
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
}

arrayDestDefaultValues();
