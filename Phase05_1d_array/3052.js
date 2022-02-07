// for (const v of set) {
//   console.log(v);
// }
const [...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);
// input = [42, 84, 252, 420, 840, 126, 42, 84, 420, 126];
// input2 = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];
// console.log(input2);
const newInput = input.map((el) => el % 42);
// console.log(newInput);
const set = new Set(newInput);
console.log(set.size);
