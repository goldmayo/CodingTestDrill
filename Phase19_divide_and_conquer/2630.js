const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `8\n1 1 0 0 0 0 1 1\n1 0 1 0 0 0 1 1\n0 0 0 0 1 1 0 0\n0 0 0 0 1 1 0 0\n1 0 0 0 1 1 1 1\n0 1 0 0 1 1 1 1\n0 0 1 1 1 1 0 1\n0 0 1 1 1 1 1 1`
).split("\n");
// `8\n1 1 0 0 0 0 1 1\n1 1 0 0 0 0 1 1\n0 0 0 0 1 1 0 0\n0 0 0 0 1 1 0 0\n1 0 0 0 1 1 1 1\n0 1 0 0 1 1 1 1\n0 0 1 1 1 1 1 1\n0 0 1 1 1 1 1 1`
// `4\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1`
const N = +n;
const paper = inputs.map((e) => e.split(" ").map((v) => +v));
const answer = [0, 0];

const isFull = (n, x, y) => {
  let wbCount = [0, 0];
  for (let i = x; i < n + x; i++) {
    for (let j = y; j < n + y; j++) {
      if (wbCount[0] !== 0 && wbCount[1] !== 0) return false;
      paper[i][j] === 0 ? wbCount[0]++ : wbCount[1]++;
    }
  }
  if (wbCount[0] !== 0 && wbCount[1] !== 0) return false;
  wbCount[0] > wbCount[1] ? answer[0]++ : answer[1]++;
  return true;
};
const divide = (n, x, y) => {
  if (n === 1) {
    paper[x][y] === 0 ? answer[0]++ : answer[1]++;
    return;
  }
  if (isFull(n, x, y)) {
    return;
  } else {
    let len = n / 2;
    divide(len, x, y);
    divide(len, x, y + len);
    divide(len, x + len, y);
    divide(len, x + len, y + len);
  }
};
const main = () => {
  divide(N, 0, 0);
  console.log(answer.join("\n"));
};
main();

// 1 1 0 0 0 0 1 1
// 1 0 1 0 0 0 1 1
// 0 0 0 0 1 1 0 0
// 0 0 0 0 1 1 0 0
// 1 0 0 0 1 1 1 1
// 0 1 0 0 1 1 1 1
// 0 0 1 1 1 1 0 1
// 0 0 1 1 1 1 1 1
