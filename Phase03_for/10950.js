const solution = (userInput) => {
  return console.log(userInput);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  //   console.log(input);
}).on("close", () => {
  solution(input);
  console.log(input);
  process.exit();
});
