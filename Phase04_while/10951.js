const [...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let count = 0;
while (count < input.length - 1) {
  const AB = input[count].split(" ");
  console.log(+AB[0] + +AB[1]);
  count++;
}
