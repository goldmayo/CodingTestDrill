function solution(userInput) {
  const [A, B, parsedA, parsedB] = userInput;
  console.log([A]);
  console.log([B]);
  const a = parseInt(A);
  const b = parseInt(B);
  return console.log(`a:${a}\nb:${b}`);
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let list = [];
let input = [];
// let count = 0;
rl.on("line", function (line) {
  input.push(line);
  console.log(input);
}).on("close", function () {
  input.map((el) => {
    for (let i = 0; i < el.length; i++) {
      list.push(parseInt(el.substr(i, 1)));
    }
    console.log(list);
    input.push(list);
    list = [];
  });
  console.log(input);
  //   input = input.split(" ").map((el) => parseInt(el));
  solution(input);
  process.exit();
});
