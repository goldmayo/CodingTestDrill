// const [T, ...input] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const T = 5;
input = [
  "5 50 50 70 80 100",
  "7 100 95 90 80 70 60 50",
  "3 70 90 80",
  "3 70 90 81",
  "9 100 99 98 97 96 95 94 93 91",
];
let inputs = [];
for (let i = 0; i < input.length; i++) {
  inputs.push(
    input[i]
      .split(" ")
      .map((el) => +el)
      .splice(1, input[i].length - 1)
  );
}
const reducer = (acc, curr) => acc + curr;
// console.log(inputs);
let averageI = 0;
let biggerThanAverage = 0;
for (let i = 0; i < inputs.length; i++) {
  let averageI = inputs[i].reduce(reducer) / inputs[i].length;
  let biggerThanAverage = inputs[i].filter((el) => el > averageI).length;
  let result = ((biggerThanAverage / inputs[i].length) * 100).toFixed(3);

  console.log(`${result}%`);
}
