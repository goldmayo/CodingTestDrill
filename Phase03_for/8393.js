function solution(userInput) {
  return console.log((userInput * (userInput + 1)) / 2);
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(parseInt(input));
  process.exit();
});
