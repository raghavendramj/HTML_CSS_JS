function mapsExample() {
  let john = { name: "John Doe" },
    lily = { name: "Lily Bush" },
    peter = { name: "Peter Drucker" };

  let userRoles = new Map();
  console.log(typeof userRoles);
  console.log(userRoles instanceof Map);

  userRoles.set(john, "admin");
  userRoles.set(lily, "editor");
  userRoles.set(peter, "subscriber");

  let userRoles2 = new Map([
    [john, "admin"],
    [lily, "editor"],
    [peter, "subscriber"],
  ]);

  console.log("userRoles2.get(john) ->", userRoles2.get(john));
  console.log("userRoles2.has(lily) ->", userRoles2.has(lily));
  console.log("userRoles2.size  ->", userRoles2.size);

  console.log("---------------> Using for each for userRoles2.keys");
  for (let user of userRoles2.keys()) {
    console.log(user.name, " : ", userRoles2.get(user));
  }

  console.log("---------------> Using for each for userRoles2.values");
  for (let role of userRoles2.values()) {
    console.log(role);
  }
  console.log("---------------> Using for each for userRoles2.entries");
  for (let elem of userRoles.entries()) {
    console.log(`${elem[0].name}: ${elem[1]}`);
  }
  console.log("---------------> Using for each for entries more readable");
  for (let [user, role] of userRoles.entries()) {
    console.log(`${user.name}: ${role}`);
  }
  console.log("---------------> Using forEach");
  userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));
}

mapsExample();
