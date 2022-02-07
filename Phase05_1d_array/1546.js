const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// console.log(T);
const inputs = input[0].split(" ").map((el) => +el);
// console.log(inputs);
const reducer = (acc, curr) => acc + curr;
const sumInputs = inputs.reduce(reducer);
// console.log(sumInputs);
const M = Math.max(...inputs);
// console.log(M);
console.log((sumInputs / inputs.length / M) * 100);
