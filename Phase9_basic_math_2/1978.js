const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const T = "6";
// let input = ["1 2 3 5 7 11"];
let count = 0;
let inputs = input[0].split(" ").map((el) => +el);

const isPrime = (N) => {
  if (N === 1) return;
  for (let j = 2; j < N; j++) {
    if (N % j === 0) return;
  }
  count++;
};

for (let i = 0; i < +T; i++) {
  isPrime(inputs[i]);
}

console.log(count);
