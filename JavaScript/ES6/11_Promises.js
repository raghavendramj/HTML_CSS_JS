//Problem Statement:- Complete assignment by tomorrow
// You don't know that you will spend your time to finish the assignment or not.
//Promise :- To complete the assignment by tomorrow
// Promise has 3 states

// Pending -> Don't know if you will finish by tomorrow
// Fulfilled -> You will finish by tomorrow
// Rejected -> You don't finish

let finished = true;

let jsAssignment = (completedStatus) => {
  return new Promise((resolve, reject) => {
    if (completedStatus) {
      resolve("I have completed the assignment");
    } else {
      reject("I haven't completed the assignment");
    }
  });
};

jsAssignment(true).then(
  (succesMsg) => console.log(succesMsg),
  (reason) => console.log(reason)
);

jsAssignment(false).then(
  (succesMsg) => console.log(succesMsg)
//   (reason) => console.log(reason)
).catch(error => console.log(error));


