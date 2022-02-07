const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let count = 0;
let N = +input;
while (true) {
  if (N % 5 === 0) {
    console.log(Math.floor(N / 5) + count);
    break;
  }
  if (0 > N) {
    console.log(-1);
    break;
  }
  count++;
  N -= 3;
}
