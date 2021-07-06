const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const star = "*";
let answer = "";
for (let i = 0; i < input; i++) {
  console.log((answer += star));
}
