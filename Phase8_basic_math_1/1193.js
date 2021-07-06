// const stream = require("fs").readFileSync("/dev/stdin").toString().trim();
// const input = +stream;
const input = 1;

let N = 0;
let line = 0;
while (true) {
  line = (N * (N + 1)) / 2;
  if (line >= input) break;
  N++;
}
// console.log(N);
let arr = [];
if (N % 2 === 0) {
  for (let i = 0; i < N; i++) {
    arr.push(`${i + 1}/${N - i}`);
  }
} else {
  for (let i = 0; i < N; i++) {
    arr.push(`${N - i}/${i + 1}`);
  }
}
// let result = arr.at(2);
// console.log(result);
console.log(arr[input - (line - N) - 1]);
