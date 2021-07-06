const T = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = "";
for (let i = T; i > 0; i--) {
  answer += i + "\n";
}
console.log(answer);
