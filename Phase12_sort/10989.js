/**
 * 계수정렬(counting sort)
 */

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const MAX = Math.max(...input);
let arr = input;
let count = Array(MAX + 1);
let result = Array(N);

for (let i = 0; i < count.length; i++) {
  count[i] = 0;
}

for (let j = 0; j < N; j++) {
  count[arr[j]]++;
}

for (let k = 0; k < count.length - 1; k++) {
  count[k + 1] += count[k];
}

for (let l = 0; l < N; l++) {
  result[count[arr[l]] - 1] = arr[l];
  count[arr[l]] -= 1;
}
console.log(result.join("\n"));
