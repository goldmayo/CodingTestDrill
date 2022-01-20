const [n, k] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3\n7`
).split("\n");
const N = +n;
const K = +k;

const findOrder = (n) => {
  let count = 0;
  for (let i = 1; i < N + 1; i++) {
    count += Math.min(Math.floor(n / i), N);
  }
  return count;
};

const binarySearch = (start, end) => {
  if (start > end) return start;
  let mid = Math.floor((start + end) / 2);
  let order = findOrder(mid);
  return order < K ? binarySearch(mid + 1, end) : binarySearch(start, mid - 1);
};

const main = () => {
  let start = 1;
  let end = K;
  console.log(binarySearch(start, end));
};
main();
//https://velog.io/@ledcost/%EB%B0%B1%EC%A4%80-1300-%ED%8C%8C%EC%9D%B4%EC%8D%AC-node.js-K%EB%B2%88%EC%A7%B8-%EC%88%98-%EA%B3%A8%EB%93%9C2-%EC%9D%B4%EB%B6%84-%ED%83%90%EC%83%89
//https://www.acmicpc.net/board/view/14272
