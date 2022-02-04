const input = "K7KA1CB5";
const str = input.match(/[a-zA-Z]/g).sort(); // equal to /\D/
const nums = input
  .match(/[0-9]/g) // equal to /\d/
  .map(Number)
  .reduce((acc, curr) => acc + curr);
console.log(`${str.join("")}${nums}`);

let string = [];
let numbers = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i].match(/\D/g)) {
    string.push(input[i]);
  } else {
    numbers += +input[i];
  }
}
console.log(`${string.sort().join("")}${numbers}`);
