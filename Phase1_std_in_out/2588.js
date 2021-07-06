const changeStringToInt = (arr, str) => {
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str.substr(i, 1)));
  }
  return arr;
};

const solution = (userInput) => {
  const [A, B] = userInput;
  const a = parseInt(A);
  const b = parseInt(B);
  let parsedB = changeStringToInt([], B);
  return console.log(
    `${a * parsedB[2]}\n${a * parsedB[1]}\n${a * parsedB[0]}\n${a * b}\n`
  );
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
  process.exit();
});
