const [NM, inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 20\n4 42 40 26 46`
).split("\n");
// `4 7\n20 15 10 17`

const [N, M] = NM.split(" ").map(Number);
const heightOfTrees = inputs.split(" ").map(Number);
let max = Number.MIN_SAFE_INTEGER;

const felling = (n) => {
  let result = 0;
  for (const e of heightOfTrees) {
    if (e - n >= 0) {
      result += e - n;
    }
  }
  return result;
};
const binarySearch = (target, start, end) => {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  let logs = felling(mid);
  if (logs < target) {
    return binarySearch(target, start, mid - 1);
  } else {
    mid > max ? (max = mid) : "";
    return binarySearch(target, mid + 1, end);
  }
};
const main = () => {
  let start = 0;
  let end = Math.max(...heightOfTrees);
  binarySearch(M, start, end);
  console.log(max);
};
main();
