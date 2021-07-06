const solution = (userInput) => {
  const [X, Y] = userInput;
  if (X === 0 || Y === 0) {
    return;
  }
  switch (true) {
    case X > 0 && Y > 0:
      return console.log("1");
    case X < 0 && Y > 0:
      return console.log("2");
    case X < 0 && Y < 0:
      return console.log("3");
    case X > 0 && Y < 0:
      return console.log("4");
    default:
      return;
  }
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input.map((num) => parseInt(num, 10)));
  process.exit();
});
