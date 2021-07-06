// const [T, ...input] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
const T = 3;
let input = ["0 3", "1 5", "0 8"];
console.log("-------------------------");
for (let i = 0; i < +T; i++) {
  let [X, Y] = input[i].split(" ").map((el) => +el);

  let step = 1;
  let range = Y - X;
  let increment = 0;
  let layer = 1;

  while (layer < range) {
    increment++;
    step++;
    layer += increment;
    if (layer >= range) {
      break;
    }
    step++;
    layer += increment;
    if (layer >= range) {
      break;
    }
  }
  if (layer > range) {
    step--;
  }
  console.log(`range: ${range}  layer: ${layer}  step: ${step}`);
  console.log(step);
}
