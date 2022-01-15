const [...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 1 2 3 4 5\n0`
).split("\n");
// `3 1000000000 1000000000 1000000000\n0`
// `17 1 2 11 10 2 13 2 1 2 2 3 1 4 5 1 3 3\n4 1000 1000 1000 1000\n0`
// `12 28 17 0 7 29 18 16 12 3 30 29 26\n0`
// `2 0 0\n0`
// `5 5 10 5 11 10\n0`
// `10 2 0 2 2 2 5 5 5 5 5\n4 1000 1000 1000 1000\n0`
//https://bingorithm.tistory.com/14 반례
//https://cider.tistory.com/10 풀이
const iterator = inputs[Symbol.iterator]();
let result = "";

const findMaxArea = (arr, left, right) => {
  if (left === right) return arr[left];
  const mid = Math.floor((left + right) / 2);
  let area = Math.max(findMaxArea(arr, left, mid), findMaxArea(arr, mid + 1, right));
  let low = mid;
  let high = mid + 1;
  let height = Math.min(arr[low], arr[high]);
  area = Math.max(area, height * 2);
  while (low > left || high < right) {
    if (high < right && (low === left || arr[low - 1] < arr[high + 1])) {
      high++;
      height = Math.min(height, arr[high]);
    } else {
      low--;
      height = Math.min(height, arr[low]);
    }
    area = Math.max(area, height * (high - low + 1));
  }
  return area;
};
const main = () => {
  while (true) {
    let testCase = iterator.next().value;
    if (testCase === "0") break;
    let [N, ...histogram] = testCase.split(" ").map((e) => +e);
    result += `${findMaxArea(histogram, 0, N - 1)}\n`;
  }
  console.log(result);
};
main();
