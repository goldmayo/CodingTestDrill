const T = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = "";
for (let i = 1; i <= T; i++) {
  answer += i + "\n";
}
console.log(answer);
