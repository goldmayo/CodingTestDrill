// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .toString()
//   .trim()
//   .split("\n");

// const input = ["64", "65"];

let primeArr = [];
let sum = 0;
const isPrime = (N) => {
  if (N === 1) return false;
  for (let i = 2; i < N; i++) {
    if (N % i === 0) return false;
  }
  return true;
};

for (let i = +input[0]; i <= +input[1]; i++) {
  if (isPrime(i)) {
    primeArr.push(i);
  }
}
// console.log(primeArr);
const reducer = (acc, cur) => acc + cur;
primeArr.length === 0 ? (sum = -1) : (sum = primeArr.reduce(reducer));
console.log(sum);
sum === -1 ? "" : console.log(Math.min(...primeArr));
