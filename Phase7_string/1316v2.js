const fs = require("fs");
const [N, ...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
abbbbbb
abaccccccccc
abccctcccffff
aaaaaj
`
)
  .trim()
  .split("\n");

let numWords = Number(N);
let count = 0;

for (let i = 0; i < numWords; i++) {
  let newArr = [];
  let nowArr = arr[i];

  for (let j = 0; j < nowArr.length; j++) {
    if (newArr.indexOf(nowArr[j]) === -1 || nowArr[j - 1] === nowArr[j]) {
      newArr += nowArr.slice(j, j + 1);
    } else {
      break;
    }
  }

  if (newArr.length === nowArr.length) {
    count++;
  }
}

console.log(count);
