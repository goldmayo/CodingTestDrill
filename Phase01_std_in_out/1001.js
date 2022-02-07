function solution(userInput) {
  const a = userInput[0];
  const b = userInput[1];
  if (0 < a && b < 10) {
    return console.log(a - b);
  }
  return;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let stream;
rl.on("line", function (line) {
  stream = line;
  rl.close();
}).on("close", function () {
  input = stream.split(" ").map((el) => parseInt(el));
  solution(input);
  process.exit();
});
