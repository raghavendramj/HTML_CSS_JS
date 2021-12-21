//MAP

function mapFunction() {
  let numbers = [2, 4, 6, 8];
  console.log("Numbers : ", numbers);

  let squares = new Array();
  for (let each of numbers) {
    let square = each * each;
    squares.push(square);
  }
  console.log("Squares : ", squares);

  let squaresUsingMap = numbers.map((each) => each * each);
  console.log("Squares using map: ", squaresUsingMap);

  let names = ["John", "Mac", "Peter"];
  let lengths = names.map((name) => name.length);
  console.log("Lengths using map: ", lengths);
}
// mapFunction();

function sortFunction() {
  let numbers = [4, 2, 6, 1, 3, 5];

  console.log("Array  :- ", numbers);
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log("Using Comparator :- ", numbers);

  numbers = [4, 2, 6, 1, 3, 5];
  let sortedNumbers = numbers.sort((a, b) => a - b);
  console.log("Using arrow func + Comparator :- ", sortedNumbers);
}

// sortFunction();

function filterFunctions() {
  let cities = [
    { name: "Los Angeles", population: 3792621 },
    { name: "New York", population: 8175133 },
    { name: "Chicago", population: 2695598 },
    { name: "Houston", population: 2099451 },
    { name: "Philadelphia", population: 1526006 },
  ];

  let bigCities = [];
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
      bigCities.push(cities[i]);
    }
  }
  console.log("Typical Way :- ", bigCities);
  console.log(
    "Using Filters:- ",
    cities.filter((eachObject) => eachObject.population > 3000000)
  );
}

// filterFunctions();

function reduceFunction() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Typical way of adding : ", sum);

  let reducedSum = numbers.reduce(function (accumulator, current) {
    console.log("accumulator: ", accumulator, " and current: ", current);
    return accumulator + current;
  });
  console.log("Using reduce function : ", reducedSum);

  let reducedSumSimplerWay = numbers.reduce((a, b) => a + b);
  console.log("Using reducedSumSimplerWay function : ", reducedSumSimplerWay);
}

// reduceFunction();

function problemStmtReduceFuction() {
  let shoppingCart = [
    {
      product: "phone",
      qty: 1,
      price: 699,
    },
    {
      product: "Screen Protector",
      qty: 1,
      price: 9.98,
    },
    {
      product: "Memory Card",
      qty: 2,
      price: 20.99,
    },
  ];

  let amountToPay = shoppingCart.reduce(
    (accumulator, eachProduct) =>
      accumulator + eachProduct.price * eachProduct.qty,
    0
  );
  console.log("Amount to pay :- ", amountToPay);
}

// problemStmtReduceFuction();

function reduceRight() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let reducedRightSum = numbers.reduceRight(function (accumulator, current) {
    console.log("accumulator: ", accumulator, " and current: ", current);
    return accumulator + current;
  });
  console.log("Using reducedRight function : ", reducedRightSum);
}

reduceRight();
