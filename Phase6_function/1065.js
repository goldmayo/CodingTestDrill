const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = +input;
// const N = 210;
let count = 0;

function divideNumber(num) {
  const t = String(num).length;
  let temp = [];
  for (let i = 0; i < t; i++) {
    temp.push(num % 10);
    num = Math.floor(num / 10);
  }
  return temp;
}

function findD(num) {
  if (num.length > 3) {
    return false;
  } else if (num.length < 3) {
    return true;
  } else {
    if (num[1] === (num[0] + num[2]) / 2) {
      return true;
    } else {
      return false;
    }
  }
}

function isAp(num) {
  const arrNum = divideNumber(num);
  const d = findD(arrNum);
  if (d == true) {
    return true;
  } else {
    return false;
  }
}
function solution(N) {
  for (let i = 1; i <= N; i++) {
    if (isAp(i)) {
      count++;
    }
  }
  console.log(count);
}

solution(N);
