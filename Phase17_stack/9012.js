const [t, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : // `6\n(())())\n(((()())()\n(()())((()))\n((()()(()))(((())))()\n()()()()(()()())()\n(()((())()(`
      `3\n((\n))\n())(()`
).split("\n");

console.log(input);

const T = +t;
let stack = [];

let answer = "";

for (let i = 0; i < T; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      stack.push("(");
    } else {
      stack.length === 0 || stack[stack.length - 1] === ")"
        ? stack.push(")")
        : stack.pop();
    }
  }
  stack.length === 0 ? (answer += "YES\n") : (answer += "NO\n");
  stack = [];
}
console.log(answer);
