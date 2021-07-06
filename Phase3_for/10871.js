const [NX, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, X] = NX.split(" ").map((el) => parseInt(el));
const input = arr
  .split(" ")
  .map((el) => parseInt(el, 10))
  .filter((el) => el < X);
console.log(`${input.join(" ")}`);
