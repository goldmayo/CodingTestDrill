const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ");

let N = +input[1] - +input[0];
let primeArr = Array.from({ length: N + 1 }, (v, i) => i + +input[0]);
let limit = Math.floor(Math.sqrt(input[1]));
let primeNumbers = [];
const isPrime = (N) => {
  if (N === 1) return false;
  for (let j = 2; j < N; j++) {
    if (N % j === 0) return false;
  }
  return true;
};
for (let i = 2; i <= limit; i++) {
  if (isPrime(i)) primeNumbers.push(i);
}
if (primeArr[0] === 1) {
  primeArr.shift();
}
for (let k of primeNumbers) {
  primeArr = primeArr.filter((el) => el % k !== 0);
  if (k >= input[0]) {
    primeArr.unshift(k);
  }
}
primeArr.sort((a, b) => a - b);
primeArr = primeArr.join("\n");
console.log(primeArr);
