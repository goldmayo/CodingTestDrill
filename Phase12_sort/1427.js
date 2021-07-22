const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

let arr = Array.from(input).map((el) => +el);
arr.sort((a, b) => b - a);
console.log(arr.join(""));
