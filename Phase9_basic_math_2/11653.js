const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();
// console.log(input);
let pf = [];
let N = parseInt(input);
for (let i = 2; i <= N; i++) {
  if (N === 1) break;
  if (N % i === 0) {
    pf.push(i);
    N = N / i;
    i--;
    continue;
  }
}
// console.log(pf);
pf.forEach((el) => console.log(el));
