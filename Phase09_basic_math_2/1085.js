const [X, Y, W, H] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split(" ");
// console.log(X, Y, W, H);
let row = +W - +X;
let col = +H - +Y;

console.log(Math.min(+X, +Y, row, col));
