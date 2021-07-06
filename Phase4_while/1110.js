const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// console.log(input);'
let A = input;
let B;
// console.log(`A: ${A} B: ${B}`);
// if (+A < 10) {
//   console.log(`beforeA: ${A}`);
//   A = A.padStart(2, "0");
//   console.log(`afterA: ${A}`);
// }
// B = +A[0] + +A[1];
// console.log(`newB: ${B}`);
// console.log(`B: ${B}`);
// if (+B >= 10) {
//   console.log(`beforeB: ${B}`);
//   B = B.toString()[1];
//   console.log(`afterB: ${B}`);
// }
// A = A[1] + B;
// console.log(`newA: ${A}`);
// console.log(`input:${input}\nA:${A}\nA[0]:${A[0]}\nA[1]:${A[1]}\nB:${B}`);
// console.log(A.toString());
console.log(`${input}\t${typeof input}`);
let count = 0;
while (true) {
  if (A === "0") {
    count++;
    break;
  }
  if (+A < 10) {
    console.log(`beforeA: ${A}`);
    A = A.padStart(2, "0");
    console.log(`afterA: ${A}`);
  }
  B = +A[0] + +A[1];
  console.log(`newB: ${B}`);
  console.log(`B: ${B}`);
  if (+B >= 10) {
    console.log(`beforeB: ${B}`);
    B = B.toString()[1];
    console.log(`afterB: ${B}`);
  }
  A = A[1] + B;
  console.log(`newA: ${A}`);
  count++;
  //   console.log(count);
  if (+A === +input) {
    break;
  }
  //   if (count === 60) {
  //     console.log(typeof A);
  //     console.log(+A);
  //     break;
  //   }
}
console.log(count);
