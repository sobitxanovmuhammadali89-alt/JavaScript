// 1
people[4] = {
  id: 5,
  firstName: "Ali",
  lastName: "Valiyev",
  age: 25,
  status: "Dasturchi"
};

// 2
people = people.filter(x => x.lastName.endsWith("va"));

// 3
people = people.filter(x => x.id != 4 && x.id != 9);

// 4
people.find(x => x.id == 7).firstName = "Gulbashakar";

// 5
people.sort((a, b) => a.lastName.localeCompare(b.lastName));

console.log(people);