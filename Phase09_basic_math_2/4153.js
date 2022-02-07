const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");
// console.log(input);
// let input = ["6 8 10", "25 52 60", "5 12 13", "0 0 0"];

function isRT(a, b, c) {
  let result = false;
  Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
    ? (result = true)
    : (result = false);
  return result;
}

for (let i = 0; i < input.length - 1; i++) {
  let inputs = input[i]
    .split(" ")
    .map((e) => +e)
    .sort((a, b) => a - b);
  let [A, B, C] = inputs;

  isRT(A, B, C) ? console.log("right") : console.log("wrong");
}
