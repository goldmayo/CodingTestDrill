function solution(userInput) {
  const [A, B, C] = userInput;
  if (1 < A && A < 10001 && 1 < B && B < 10001 && 1 < C && C < 10001) {
    return console.log(
      `${(A + B) % C}\n${((A % C) + (B % C)) % C}\n${(A * B) % C}\n${
        ((A % C) * (B % C)) % C
      }`
    );
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
