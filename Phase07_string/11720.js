const [strlen, number] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// console.log(`strlen: ${strlen}\nnumber: ${+number}`);
// console.log(typeof number);
// const number = "7000000000000000000000000";

function sumDigit(num) {
  let sum = 0;
  const t = num.length;
  for (let i = 0; i < t; i++) {
    sum += +num.substr(t - 1 - i, 1);
    // num = String(Math.floor(num / 10));
    num = num.substr(0, t - i);
  }
  return sum;
}

function solution(num) {
  const result = sumDigit(num);
  return result;
}

console.log(solution(number));
