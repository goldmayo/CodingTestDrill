const { timeStamp } = require("console");

const [...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
function reverseInput(input) {
  let temp = [];
  for (let i = 0; i < input.length; i++) {
    temp.push(input[i].split("").reverse().join(""));
  }
  return temp;
}
console.log(Math.max(...reverseInput(input)));
