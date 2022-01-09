const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `9\n0 0 0 1 1 1 -1 -1 -1\n0 0 0 1 1 1 -1 -1 -1\n0 0 0 1 1 1 -1 -1 -1\n1 1 1 0 0 0 0 0 0\n1 1 1 0 0 0 0 0 0\n1 1 1 0 0 0 0 0 0\n0 1 -1 0 1 -1 0 1 -1\n0 -1 1 0 1 -1 0 1 -1\n0 1 -1 1 0 -1 0 1 -1`
).split("\n");

const N = +n;
const paper = inputs.map((e) => e.split(" ").map((v) => +v));
let answer = [0, 0, 0];

function isFull(n, x, y) {
  let count = [0, 0, 0];
  let temp = paper[x][y];
  for (let i = x; i < x + n; ++i) {
    for (let j = y; j < y + n; ++j) {
      if (temp != paper[i][j]) {
        return false;
      }
      if (paper[i][j] === -1) {
        count[0]++;
      } else if (paper[i][j] === 0) {
        count[1]++;
      } else {
        count[2]++;
      }
    }
  }
  let maxIdx = count.findIndex((e) => e === Math.max(...count));
  answer[maxIdx]++;
  return true;
}

const divide = (n, x, y) => {
  if (n === 1) {
    if (paper[x][y] === -1) {
      answer[0]++;
    } else if (paper[x][y] === 0) {
      answer[1]++;
    } else {
      answer[2]++;
    }
    return;
  }
  if (isFull(n, x, y)) {
    return;
  } else {
    let len = Math.floor(n / 3);
    divide(len, x, y);
    divide(len, x, y + len);
    divide(len, x, y + 2 * len);
    divide(len, x + len, y);
    divide(len, x + len, y + len);
    divide(len, x + len, y + 2 * len);
    divide(len, x + 2 * len, y);
    divide(len, x + 2 * len, y + len);
    divide(len, x + 2 * len, y + 2 * len);
  }
};

const main = () => {
  divide(N, 0, 0);
  console.log(answer.join("\n"));
};
main();

// const isFull = (n, x, y) => {
//     let count = [0, 0, 0];
//     for (let i = x; i < n + x; i++) {
//       for (let j = y; j < n + y; j++) {
//         if (
//           (count[0] === 0 && count[1] !== 0 && count[2] !== 0) ||
//           (count[0] !== 0 && count[1] === 0 && count[2] !== 0) ||
//           (count[0] !== 0 && count[1] !== 0 && count[2] === 0)
//         ) {
//           return false;
//         }
//         if (paper[i][j] === -1) {
//           count[0]++;
//         } else if (paper[i][j] === 0) {
//           count[1]++;
//         } else {
//           count[2]++;
//         }
//       }
//     }
//     if (
//       (count[0] === 0 && count[1] !== 0 && count[2] !== 0) ||
//       (count[0] !== 0 && count[1] === 0 && count[2] !== 0) ||
//       (count[0] !== 0 && count[1] !== 0 && count[2] === 0)
//     ) {
//       return false;
//     }
//     let maxIdx = count.findIndex((e) => e === Math.max(...count));
//     answer[maxIdx]++;
//     return true;
//   };
