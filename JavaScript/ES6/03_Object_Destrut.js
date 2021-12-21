let person = {
  firstName: "John",
  lastName: "Doe",
};

function typicalWay() {
  let firstName = person.firstName;
  let lastName = person["lastName"];
  console.log("Typical Way : firstName : ", firstName);
  console.log("Typical Way : lastName : ", lastName);
}
// typicalWay();

function usingObjectDestruct() {
  let { firstName, lastName } = person;
  console.log("Destructured: firstName : ", firstName);
  console.log("Destructured: lastName : ", lastName);

  let { firstName: fname, lastName: lname } = person;
  console.log("destructured : fname : ", fname);
  console.log("destructured : lname : ", lname);
}

// usingObjectDestruct();

function defaultValues() {
  let { firstName, middleName = "", lastName, age: currentAge = 18 } = person;
  console.log("Object Destructured: firstName : ", firstName);
  console.log("Object Destructured: lastName : ", lastName);
  console.log("Object Destructured middleName : ", middleName);
  console.log("Object Destructured age : ", currentAge);
}

// defaultValues();

function getPerson() {
  return null;
}

function destNullObject() {
  // let { firstName, lastName } = getPerson();
  // TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.

  let { firstName, lastName } = getPerson() || {};
  console.log("Object Destructured: firstName : ", firstName);
  console.log("Object Destructured: lastName : ", lastName);
}

// destNullObject();

function nestedObjectDest() {
  let employee = {
    id: 1001,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
  };

  let {
    name: { firstName: fname, lastName: lname },
  } = employee;

  console.log("Object Destructured: firstName : ", fname);
  console.log("Object Destructured: lastName : ", lname);
}

nestedObjectDest();
