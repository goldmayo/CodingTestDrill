const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
let temp = BigInt(A) + BigInt(B);
let temp2 = temp.toString();
// console.log(temp);
console.log(temp2);
