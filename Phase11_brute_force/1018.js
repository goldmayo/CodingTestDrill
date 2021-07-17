const [NM, ...input] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

//console.log(input[0][0]); //B

let [N, M] = NM.split(" ").map((el) => +el);
let result = 64;
function countChange(p, q) {
  let changeWhite = 0;
  let changeBlack = 0;
  for (let i = p; i < p + 8; i++) {
    for (let j = q; j < q + 8; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          if (input[i][j] !== "W") changeWhite++;
          if (input[i][j] !== "B") changeBlack++;
        } else {
          if (input[i][j] !== "B") changeWhite++;
          if (input[i][j] !== "W") changeBlack++;
        }
      } else {
        if (j % 2 === 0) {
          if (input[i][j] !== "B") changeWhite++;
          if (input[i][j] !== "W") changeBlack++;
        } else {
          if (input[i][j] !== "W") changeWhite++;
          if (input[i][j] !== "B") changeBlack++;
        }
      }
    }
  }
  return Math.min(changeWhite, changeBlack);
}

for (let i = 0; i + 8 <= N; i++) {
  for (let j = 0; j + 8 <= M; j++) {
    result = Math.min(result, countChange(i, j));
  }
}
console.log(result);
