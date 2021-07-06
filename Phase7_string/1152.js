const [...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let newArr = input;

if (newArr[0] === "") {
  newArr.pop();
}

console.log(input.length);
