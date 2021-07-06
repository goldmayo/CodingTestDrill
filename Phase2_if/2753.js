function solution(userInput) {
  if (userInput % 4 === 0) {
    if (userInput % 100 !== 0 || userInput % 400 === 0) {
      return console.log("1");
    } else {
      return console.log("0");
    }
  } else {
    return console.log("0");
  }
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
