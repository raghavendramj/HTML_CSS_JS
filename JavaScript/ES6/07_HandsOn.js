//Q. Flter cities with population < 3000000) and sort them, print a name : population

function problemStatement() {
  let cities = [
    { name: "Los Angeles", population: 3792621 },
    { name: "New York", population: 8175133 },
    { name: "Chicago", population: 2695598 },
    { name: "Houston", population: 2099451 },
    { name: "Philadelphia", population: 1526006 },
  ];

  cities
    .filter((city) => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map((city) => console.log(city.name, ":", city.population));
}

problemStatement();