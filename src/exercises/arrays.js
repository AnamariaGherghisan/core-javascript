const numbers = [1, 2, 3];
const users = ["Alice", "Bob", "Carol"];
const locations = [
  {
    street: "London Road",
    city: "Peterborough",
  },
  {
    street: "Marshall Way",
    city: "Peterborough",
  },
];
console.log(numbers);
console.log(users);
console.log(locations);

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubleNumbers);

const upperCaseUsers = users.map((user) => {
  return user.toUpperCase();
});
console.log(upperCaseUsers);

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);

const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});
console.log(oddNumbers);

const formattedLocations = locations.map((location) => {
  return `${location.street}, ${location.city}`;
});
console.log(formattedLocations);

const upperCaseLocations = locations.map(() => {
  `${locations.street.toUpperCase()}, ${locations.city.toUpperCase()}`;
});

console.log(upperCaseLocations);
