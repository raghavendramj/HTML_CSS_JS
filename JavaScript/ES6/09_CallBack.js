function syncronousCallBacks() {
  function isOddNumber(number) {
    return number % 2 != 0;
  }

  let arrrowOddNumberCallBack = (number) => number % 2 != 0;

  let numbers = [1, 2, 4, 7, 3, 5, 6];
  let oddNumbers = numbers.filter(isOddNumber);
  console.log("Odd Numbers :- ", oddNumbers);
  console.log(
    "Odd Numbers using arrow :- ",
    numbers.filter(arrrowOddNumberCallBack)
  );

  let nums = [1, 2, 3, 4];

  let squareANumberCallBack = (number) => number * number;
  let squares = nums.map(squareANumberCallBack);
  console.log("Using map ", squares);
}

syncronousCallBacks();

function asycCallBacks() {
  let getDetails = () => {
    console.log("This is my callback");
  };

  setTimeout(getDetails, 3000);
}

// asycCallBacks();
