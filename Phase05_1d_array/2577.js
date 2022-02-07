const [...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

// input = [150, 266, 427];
// console.log(`A: ${A}\nB: ${B}\nC: ${C}\n`);
//console.log(input);
let counterArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const compareArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const reducer = (acc, curr) => acc * curr;
//console.log(input.reduce(reducer));
const ABC = input.reduce(reducer);
const result = ABC.toString();
// console.log(result[2]);
for (let j = 0; j < 10; j++) {
  for (let i = 0; i < result.length; i++) {
    if (+result[i] === j) {
      counterArr[j]++;
    }
  }
}
console.log(counterArr.join("\n"));
