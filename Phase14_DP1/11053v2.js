const [n, a] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `6\n10 20 10 30 20 50`
).split("\n");

const N = +n;
const A = a.split(" ").map((el) => +el);

function binarySearch(key) {
  let start = 0;
  let end = X.length;
  if (start > end) return;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (X[mid] < key) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}

let X = [0];
A.unshift(0);
console.log(`A : ${A}\nX : ${X}\n`);
for (let i = 1; i <= N; i++) {
  console.log("i :", i);
  if (X[X.length - 1] < A[i]) {
    // console.log(`X[${idx}] = ${A[i]}`);
    X.push(A[i]);
  } else {
    X[binarySearch(A[i])] = A[i];
  }
  console.log(X);
}
console.log(X);
console.log(X.length - 1);

/*
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let N = input.shift().split(' ')
let arr = input.shift().split(' ').map(Number);

function lowerBound(arr, target, start, end) {
  if (start === end) return start;
  let mid = parseInt((start + end) / 2);
  if (arr[mid] >= target) return lowerBound(arr, target, start, mid);
  else if (arr[mid] < target) return lowerBound(arr, target, mid + 1, end);
}

let temp = []
s
for (let num of arr) {
  let idx = lowerBound(temp, num, 0, temp.length)
  temp[idx] = num
}

console.log(temp.length)
*/
