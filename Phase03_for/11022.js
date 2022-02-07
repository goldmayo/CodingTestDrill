const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = "";
const reducer = (acc, currentValue) => acc + currentValue;
for (let i = 0; i < T; i++) {
  answer += `Case #${i + 1}: ${input[i].split(" ")[0]} + ${
    input[i].split(" ")[1]
  } = ${input[i]
    .split(" ")
    .map((e) => parseInt(e))
    .reduce(reducer)}\n`;
}
console.log(answer);
