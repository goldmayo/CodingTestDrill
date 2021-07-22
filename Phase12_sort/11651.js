{
  const [N, ...input] = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim()
    .split("\n");

  let result = "";

  const makeArr = (arr, input) => {
    for (let el of input) {
      let XY = el.split(" ").map((el) => +el);
      arr.push(XY);
    }
  };
  const mergeSort = (arr) => {
    let tmp = Array.from(Array(N), () => Array(2));
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
      if (tmp[part1][1] < tmp[part2][1]) {
        arr[idx] = tmp[part1];
        part1++;
      } else if (tmp[part1][1] === tmp[part2][1]) {
        if (tmp[part1][0] < tmp[part2][0]) {
          arr[idx] = tmp[part1];
          part1++;
        } else {
          arr[idx] = tmp[part2];
          part2++;
        }
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
  const makeResult = (arr) => {
    for (let el of arr) {
      result += `${el[0]} ${el[1]}\n`;
    }
  };
  const solution = () => {
    let arr = [];
    makeArr(arr, input);
    mergeSort(arr);
    makeResult(arr);
    console.log(result);
  };
  console.time("start");
  solution();
  console.timeEnd("start");
}
