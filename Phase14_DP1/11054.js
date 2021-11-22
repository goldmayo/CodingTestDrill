const [n, a] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `10\n1 5 2 1 4 3 4 5 2 1`
).split("\n");

const N = +n;
const A = a.split(" ").map((el) => +el);
let increment = new Array(N).fill(1);
let decrement = new Array(N).fill(1);
let result = 0;
// left
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      increment[i] = Math.max(increment[i], increment[j] + 1);
    }
    console.log("increment :", increment);
  }
}
// right
for (let i = N - 2; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (A[j] < A[i]) {
      decrement[i] = Math.max(decrement[i], decrement[j] + 1);
    }
    console.log("decrement :", decrement);
  }
}

for (let k = 0; k < N; k++) {
  result = Math.max(result, increment[k] + decrement[k]);
}

console.log(result - 1);
