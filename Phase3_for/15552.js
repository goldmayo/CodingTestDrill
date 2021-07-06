const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = "";
const reducer = (acc, currentValue) => acc + currentValue;
for (let i = 0; i < T; i++) {
  answer +=
    input[i]
      .split(" ")
      .map((e) => parseInt(e))
      .reduce(reducer) + "\n";
}
console.log(answer);
