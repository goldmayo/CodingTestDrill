const stream = require("fs").readFileSync("/dev/stdin").toString().trim();
let N = +stream;
let step = 1;
let cell = 1;
while (N > cell) {
  if (N == 1) break;
  cell = 3 * step * (step + 1) + 1;
  step++;
}
console.log(step);
