const [...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);
//console.log(input);
const MAX = Math.max(...input);
console.log(MAX);
console.log(input.indexOf(MAX) + 1);
