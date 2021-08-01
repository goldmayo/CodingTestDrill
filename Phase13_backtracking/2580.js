const [...input] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let BOARD = [];
let BLANK = [];

function initilizeBOARD() {
  for (const el of input) {
    BOARD.push(el.split(" ").map((x) => +x));
  }
}
function findBlank() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (BOARD[i][j] === 0) {
        BLANK.push([i, j]);
      }
    }
  }
}

function promising(x, y, num) {
  for (let col = 0; col < 9; col++) {
    if (BOARD[x][col] === num) {
      return false;
    }
  }

  for (let row = 0; row < 9; row++) {
    if (BOARD[row][y] === num) {
      return false;
    }
  }

  subX = Math.floor(x / 3) * 3;
  subY = Math.floor(y / 3) * 3;

  for (let i = subX; i < subX + 3; i++) {
    for (let j = subY; j < subY + 3; j++) {
      if (BOARD[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

function sudokuBacktrack(index) {
  if (index === BLANK.length) {
    for (let i = 0; i < 9; i++) {
      console.log(BOARD[i].join(" "));
    }
    // return;
    process.exit(0);
  }
  let [x, y] = BLANK[index];

  for (let i = 1; i <= 9; i++) {
    if (promising(x, y, i)) {
      BOARD[x][y] = i;
      sudokuBacktrack(index + 1);
      BOARD[x][y] = 0;
    }
  }
}

function solution() {
  initilizeBOARD();
  findBlank();
  sudokuBacktrack(0);
}

solution();
