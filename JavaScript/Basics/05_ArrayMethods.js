function arrayExample() {
  var students = [
    "Anurag",
    "Nimish",
    "Naman",
    "Hamsa",
    "Royal",
    "Gokulraj",
    "Varun",
  ];
  console.log(students);
  console.log(students[5]);
  console.log(typeof students);
  printArrayContents(students);
}

// arrayExample();

function printArrayContents(arr) {
  console.log("Array with size: ", arr.length, " and elements are ", arr);
}

function pushAndPopFromRear() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  students.push("Deepak");
  students.push("Keshav");
  printArrayContents(students);

  students.pop();
  students.pop();
  console.log("************** After deletion - From End *********************");
  printArrayContents(students);
}

// pushAndPopFromRear();

function unShiftAndShiftElementFromBeginning() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  students.unshift("Gokul");
  students.unshift("Thilak");
  printArrayContents(students);

  console.log(
    "************** After deletion - From beginning *********************"
  );
  students.shift();
  students.shift();
  printArrayContents(students);
}

// unShiftAndShiftElementFromBeginning();

function arrJoin() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  console.log(students.join("~~~"));
}

// arrJoin();

function deleteMethod() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  delete students[2];
  console.log(
    "************** After deletion - using delete students[2] *********************"
  );
  printArrayContents(students);
}

// deleteMethod();

function mergeArrays() {
  var arr1 = ["Bangalore", "Mysore"];
  var arr2 = ["Chennai", "Mumbai"];

  var cities = arr1.concat(arr2);
  console.log("mergeTwoArrays -> ", cities);
}
// mergeArrays();

function spliceExamples() {
  var cities = [
    "Bangalore",
    "Mysore",
    "Chennai",
    "Mumbai",
    "Kolkota",
    "Hyderabad",
    "Delhi",
  ];
  printArrayContents(cities);

  // Params ->
  //     1 -> pos where new elements are added
  //     2 -> how many elements needs to be removed
  //     3 and ... -> new elements to be added

  //Both Removal and addition
  cities.splice(3, 3, "Kerala", "Gujurat");
  console.log("After splice(3, 3, 'Kerala', 'Gujurat'):- ", cities);

  //Only Removal case
  cities.splice(3, 2);
  console.log("After splice(3, 2) :- ", cities);

  //only addition case
  cities.splice(0, 0, "Lucknow", "Madhya Pradesh");
  console.log("After splice(0,0, 'Luk', 'MP') :- ", cities);
}
// spliceExamples();


function sliceMethods(){
    var cities = [ 'Bangalore', 'Mysore', 'Chennai', 'Mumbai', 'Kolkota', 'Hyderabad', 'Delhi' ]; 
    console.log("cities.slice(0, 3) :- ", cities.slice(0, 3));

}

sliceMethods();