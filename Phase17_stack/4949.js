const [...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `[([((([[]])))])].\nSo when I die (the [first] I will see in (heaven) is a score list).\n[ first in ] ( first out ).\nHalf Moon tonight (At least it is better than no Moon at all].\nA rope may form )( a trail in a maze.\nHelp( I[m being held prisoner in a fortune cookie factory)].\n([ (([( [ ] ) ( ) (( ))] )) ]).\n .\n.`
).split("\n");

let stack = [];
let answer = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") break;
  for (let j = 0; j < input[i].length; j++) {
    switch (input[i][j]) {
      case "(":
        stack.push("(");
        break;
      case ")":
        stack.length === 0 || stack[stack.length - 1] !== "("
          ? stack.push(input[i][j])
          : stack.pop();
        break;
      case "[":
        stack.push("[");
        break;
      case "]":
        stack.length === 0 || stack[stack.length - 1] !== "["
          ? stack.push(input[i][j])
          : stack.pop();
        break;
      default:
        break;
    }
  }
  console.log(stack);
  stack.length === 0 ? (answer += "yes\n") : (answer += "no\n");
  stack = [];
}
console.log(answer);
