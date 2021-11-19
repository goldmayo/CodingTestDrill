const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `6\n6\n10\n13\n9\n8\n1`
).split("\n");

const N = +n;
const W = inputs.map((el) => +el);

let DP = new Array(N + 1).fill(0);
console.log(`W : ${W}`);
console.log(`DP : ${DP}`);
// DP[1] = W[0];
// DP[2] = W[0] + W[1];

for (let i = 1; i <= N; i++) {
  if (i === 1) {
    DP[1] = W[0];
  }
  if (i === 2) {
    DP[2] = W[0] + W[1];
  }
  if (i > 2) {
    DP[i] = Math.max(
      DP[i - 1],
      DP[i - 2] + W[i - 1],
      DP[i - 3] + W[i - 1] + W[i - 2]
    );
  }
}
console.log(`DP : ${DP}`);
console.log(`DP[N] : ${DP[N]}`);

console.log(DP[N]);
