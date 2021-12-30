const [n, input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `4\n9 5 4 8`
).split("\n");

const N = +n;
const inputs = input.split(" ").map((e) => +e);
let stack = [];
let answer = [...inputs];

for (let i = 0; i < N; i++) {
  while (stack.length != 0 && answer[stack[stack.length - 1]] < inputs[i]) {
    answer[stack.pop()] = inputs[i];
  }
  stack.push(i);
}
while (stack.length != 0) {
  answer[stack.pop()] = -1;
}
console.log(answer.join(" "));
