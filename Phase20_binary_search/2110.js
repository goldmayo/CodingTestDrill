const [nc, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3 3\n1\n4\n6`
).split("\n");
// `5 3\n1\n7\n8\n9\n10`

const [N, C] = nc.split(" ").map(Number);
const houses = inputs.map(Number);
let max = 0;

const installRouter = (distance) => {
  let count = 1;
  let currHouse = houses[0];
  for (let i = 1; i < N; i++) {
    if (distance <= houses[i] - currHouse) {
      count++;
      currHouse = houses[i];
    }
  }
  return count;
};

const binarySearch = (start, end) => {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  let routerCount = installRouter(mid);
  if (routerCount < C) {
    return binarySearch(start, mid - 1);
  } else {
    max < mid ? (max = mid) : "";
    return binarySearch(mid + 1, end);
  }
};

const main = () => {
  houses.sort((a, b) => a - b);
  binarySearch(1, houses[N - 1]);
  console.log(max);
};
main();
