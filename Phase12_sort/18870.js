const [N, input] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const map = new Map();
let result = "";

const mergeSort = (arr) => {
  let tmp = Array(N);
  Split(arr, tmp, 0, N - 1);
};
const Split = (arr, tmp, start, end) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    Split(arr, tmp, start, mid);
    Split(arr, tmp, mid + 1, end);
    merge(arr, tmp, start, end, mid);
  }
};
const merge = (arr, tmp, start, end, mid) => {
  for (let i = start; i <= end; i++) {
    tmp[i] = arr[i];
  }
  let part1 = start;
  let part2 = mid + 1;
  let idx = start;
  while (part1 <= mid && part2 <= end) {
    if (tmp[part1] <= tmp[part2]) {
      arr[idx] = tmp[part1];
      part1++;
    } else {
      arr[idx] = tmp[part2];
      part2++;
    }
    idx++;
  }
  for (let i = 0; i <= mid - part1; i++) {
    arr[idx + i] = tmp[part1 + i];
  }
};
const deleteDup = (arr) => {
  const set = new Set(arr);
  const newArr = [...set.values()];
  return newArr;
};
const makeMap = (arr) => {
  let tmpArr = Array.from(arr);
  mergeSort(tmpArr);
  tmpArr = deleteDup(tmpArr);
  for (let i = 0; i < tmpArr.length; i++) {
    map.set(tmpArr[i], i);
  }
};
const makeResult = (arr) => {
  for (let el of arr) {
    result += `${map.get(el)} `;
  }
};
const solution = () => {
  const arr = input.split(" ").map((el) => +el);
  makeMap(arr);
  makeResult(arr);
  console.log(result);
};
// console.time("start");
solution();
// console.timeEnd("start");
