const [n, inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `6\n10 20 10 30 20 50`
).split("\n");

const N = +n;
const A = inputs.split(" ").map(Number);
A.unshift(0);
let DP = new Array(N + 1).fill(0);
let X = [0];
let idx = Number.MIN_SAFE_INTEGER;

const binarySearch = (target, start, end) => {
  if (start > end) return idx;
  let mid = Math.floor((start + end) / 2);
  if (X[mid] < target) {
    idx < mid ? (idx = mid) : "";
    return binarySearch(target, mid + 1, end);
  } else {
    return binarySearch(target, start, mid - 1);
  }
};

const findLIS = (arr, n) => {
  for (let i = 1; i <= n; i++) {
    idx = Number.MIN_SAFE_INTEGER;
    if (arr[i] > arr[i - 1]) {
      DP[i] = binarySearch(arr[i], 0, X.length) + 1;
      X[DP[i]] = arr[i];
      if (X[DP[i]] > arr[i]) {
        X[DP[i]] = arr[i];
      }
    } else {
      DP[i] = binarySearch(arr[i], 0, X.length) + 1;
      if (X[DP[i]] > arr[i]) {
        X[DP[i]] = arr[i];
      }
    }
  }
  return Math.max(...DP);
};

const main = () => {
  const answer = findLIS(A, N);
  console.log(answer);
};
main();
{
  // 'use strict';

  const { log } = require("console");
  const fs = require("fs");
  const stdin = (
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString()
      : `6
10 20 10 30 20 50`
  ).split("\n");

  const input = (() => {
    let line = 0;
    return () => stdin[line++];
  })();

  console.log(Solution());

  function Solution() {
    const N = Number(input());
    const numbers = input().split(" ").map(Number);
    const list = [numbers[0]];

    const binarySearch = (target) => {
      let low = 0;
      let high = list.length;

      while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (list[mid] < target) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }

      if (list[high] >= target) return high;
    };

    for (let i = 1; i < N; i++) {
      const num = numbers[i];
      if (list[list.length - 1] < num) {
        list.push(num);
      } else {
        const idx = binarySearch(num);
        list[idx] = num;
      }
    }

    return list.length;
  }
}
