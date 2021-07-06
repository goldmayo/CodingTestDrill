const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const inputs = input[0].split(" ").map((el) => +el);
// console.log(inputs);
// console.log(typeof inputs[0]);
let MIN = inputs[0];
let MAX = inputs[0];
for (let i = 0; i < inputs.length; i++) {
  if (MIN > inputs[i + 1]) MIN = inputs[i + 1];
}
for (let i = 0; i < inputs.length; i++) {
  if (MAX < inputs[i + 1]) MAX = inputs[i + 1];
}
// const MIN = Math.min(...inputs);
// const MAX = Math.max(...inputs);

// console.log(MIN + "\n" + MAX);
console.log(`${MIN} ${MAX}`);
