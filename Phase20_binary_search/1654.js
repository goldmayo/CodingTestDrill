const [kn, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `4 11\n802\n743\n457\n539`
).split("\n");

const [K, N] = kn.split(" ").map(Number);
const lanCables = inputs.map(Number);
let max = 0;
const check = (mid) => {
  let result = 0;
  for (const e of lanCables) {
    result += Math.floor(e / mid);
  }
  return result;
};

const binarySearch = (start, end) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  let tempK = check(mid);
  if (tempK >= N) {
    max = mid;
    return binarySearch(mid + 1, end);
  } else {
    return binarySearch(start, mid - 1);
  }
};

const main = () => {
  let start = 0;
  let end = Math.max(...lanCables);
  binarySearch(start, end);
  console.log(max);
};
main();
