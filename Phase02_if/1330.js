function solution(userInput) {
  const [A, B] = userInput;
  if (A > B) {
    return console.log(">");
  } else if (A < B) {
    return console.log("<");
  } else {
    return console.log("==");
  }
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
