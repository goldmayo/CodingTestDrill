const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const reducer = (acc, currentValue) => acc + currentValue;
for (let i = 0; i < T; i++) {
  console.log(
    input[i]
      .split(" ")
      .map((e) => parseInt(e))
      .reduce(reducer)
  );
}
