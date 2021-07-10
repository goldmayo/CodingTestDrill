const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

// const input = ["30 20", "10 10", "10 20"];

let xCordinate = [];
let yCordinate = [];

function makeCor(arr) {
  for (let cor of arr) {
    let inputCordinate = cor.split(" ").map((e) => +e);
    xCordinate.push(inputCordinate[0]);
    yCordinate.push(inputCordinate[1]);
  }
}

function isExist(arr) {
  let cor = arr[0];
  let arr2 = arr.slice(1, 4);
  if (arr2.indexOf(cor) !== -1) {
    return true;
  }
  return false;
}

function findCor(arr) {
  let targetCordinate = 0;
  if (isExist(arr)) {
    arr = arr.filter((el) => el !== arr[0]);
    targetCordinate = arr[0];
  } else {
    targetCordinate = arr[0];
  }
  return targetCordinate;
}

function solution() {
  makeCor(input);
  let x = findCor(xCordinate);
  let y = findCor(yCordinate);
  console.log(x, y);
}

solution();
