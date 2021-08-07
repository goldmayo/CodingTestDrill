const fs = require("fs");
const stdin = (
  process.platform === "windows"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : `3\n3 4 5\n1 0 1 0`
).split("\n");

// const [N, ...input] = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .toString()
//   .trim()
//   .split("\n");

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
const N = +stdin[0]; // test
const OPERAND = stdin[1].split(" ").map(Number); // test
const OPERATOR = stdin[2].split(" ").map(Number); // test

// const OPERAND = input[0].split(" ").map(Number);
// const OPERATOR = input[1].split(" ").map(Number);
console.log(N, OPERAND, OPERATOR);
function dfs(index, result, OPERATOR) {
  if (index === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (OPERATOR[i] > 0) {
      OPERATOR[i]--;
      switch (i) {
        case 0:
          dfs(index + 1, result + OPERAND[index + 1], OPERATOR);
          break;
        case 1:
          dfs(index + 1, result - OPERAND[index + 1], OPERATOR);
          break;
        case 2:
          dfs(index + 1, result * OPERAND[index + 1], OPERATOR);
          break;
        case 3:
          if (result <= 0) {
            dfs(index + 1, -Math.floor(-result / OPERAND[index + 1]), OPERATOR);
          } else {
            dfs(index + 1, Math.floor(result / OPERAND[index + 1]), OPERATOR);
          }
          break;
      }
      OPERATOR[i]++;
    }
  }
}
function solution() {
  dfs(0, OPERAND[0], OPERATOR);
}

solution();
console.log(max ? max : 0); // 음수 영 (-0)을 제외하고 MAX출력
console.log(min ? min : 0); // 음수 영 (-0)을 제외하고 MIN출력
