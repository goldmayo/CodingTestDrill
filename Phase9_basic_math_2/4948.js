//자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");
let results = "";
let inputs = input.map((el) => +el);
const solution = (n) => {
  let arr = Array(2 * n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= 2 * n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= 2 * n; j += i) {
        arr[j] = false;
      }
    }
  }
  arr = arr.splice(n + 1);
  return arr.filter((e) => e).length;
};
for (let el of inputs) {
  if (el === 0) break;
  results += solution(el) + "\n";
}
console.log(results);
