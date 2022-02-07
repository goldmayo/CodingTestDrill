function solution(userInput) {
  const [H, M] = userInput;
  if (M < 45) {
    if (H === 0) {
      return console.log(`${23} ${M + 15}`);
    } else {
      return console.log(`${H - 1} ${M + 15}`);
    }
  } else {
    return console.log(`${H} ${M - 45}`);
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
