function solution(userInput) {
  if (0 > userInput || userInput > 100) return;
  switch (true) {
    case 90 <= userInput && userInput <= 100:
      return console.log("A");
    case 80 <= userInput && userInput < 90:
      return console.log("B");
    case 70 <= userInput && userInput < 80:
      return console.log("C");
    case 60 <= userInput && userInput < 70:
      return console.log("D");
    case userInput < 60:
      return console.log("F");
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
