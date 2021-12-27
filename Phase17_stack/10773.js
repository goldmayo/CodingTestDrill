const [k, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `10\n1\n3\n5\n4\n0\n0\n7\n0\n0\n6`
).split("\n");

const K = +k;
const inputs = input.map((v) => +v);
const stack = [];
let answer;

for (let i = 0; i < K; i++) {
  if (inputs[i] === 0) {
    stack.pop();
  } else {
    stack.push(inputs[i]);
  }
}
stack.length === 0
  ? (answer = 0)
  : (answer = stack.reduce((acc, curr) => acc + curr));
console.log(answer);
