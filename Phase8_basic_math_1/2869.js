const [...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
let [A, B, V] = input.map((el) => +el);
let X = Math.ceil((V - A) / (A - B)) + 1;
console.log(X);
// console.log(A, B, V);
let count = 1;
while (V > 0) {
  V = V - A;
  if (V <= 0) break;
  V = V + B;
  count++;
}
console.log(count);
