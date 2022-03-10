const [n, input, m] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `9\n5 12 7 10 9 1 2 3 11\n13`
).split("\n");
const N = +n;
const inputs = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = +m;
let result = 0;
let start = 0;
let end = inputs.length - 1;
while (start !== end) {
  if (inputs[start] + inputs[end] === M) {
    result += 1;
    start += 1;
  } else if (inputs[start] + inputs[end] > M) {
    end--;
  } else {
    start++;
  }
}
console.log(result);
