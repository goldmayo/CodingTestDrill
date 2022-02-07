const stream = require("fs").readFileSync("/dev/stdin").toString().trim();
let [A, B, C] = stream.split(" ").map((el) => +el);
// let [A, B, C] = [2100000000, 9, 10];

function calcBreakEvenPoint(A, B, C) {
  if (B >= C) return -1;
  let breakEvenPoint = A / (C - B);
  let result = Math.floor(breakEvenPoint) + 1;
  return result;
}
const solution = calcBreakEvenPoint(A, B, C);
console.log(solution);
