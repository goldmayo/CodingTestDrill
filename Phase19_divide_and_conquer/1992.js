//quad tree
const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `4\n1100\n1000\n0000\n0000`
).split("\n");
// `8\n11110000\n11110000\n00011100\n00011100\n11110000\n11110000\n11110011\n11110011`
const N = +n;
const wbStream = inputs.map((e) => e.split("").map((v) => +v));
let answer = "";

const isFull = (n, x, y) => {
  let wbCount = [0, 0];
  for (let i = x; i < n + x; i++) {
    for (let j = y; j < n + y; j++) {
      if (wbCount[0] !== 0 && wbCount[1] !== 0) {
        return false;
      }
      wbStream[i][j] === 0 ? wbCount[0]++ : wbCount[1]++;
    }
  }
  if (wbCount[0] !== 0 && wbCount[1] !== 0) {
    return false;
  }
  wbCount[0] > wbCount[1] ? (answer += `${0}`) : (answer += `${1}`);
  return true;
};

const divide = (n, x, y) => {
  if (n === 1) {
    wbStream[x][y] === 0 ? (answer += `${0}`) : (answer += `${1}`);
    return;
  }
  if (isFull(n, x, y)) {
    return;
  } else {
    let len = Math.floor(n / 2);
    answer += "(";
    divide(len, x, y);
    divide(len, x, y + len);
    divide(len, x + len, y);
    divide(len, x + len, y + len);
  }
  answer += ")";
};

const main = () => {
  divide(N, 0, 0);
  console.log(answer);
};
main();

//  답  : 1100101001010001
// 출력 : 1100101001010001
