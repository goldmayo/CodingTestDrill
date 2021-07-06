const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const star = "*";
let answer = [];
for (let i = 0; i < input; i++) {
  answer.push(" ");
}
for (let j = input - 1; j >= 0; j--) {
  answer.splice(j, 1, star);
  console.log(answer.join(""));
}
