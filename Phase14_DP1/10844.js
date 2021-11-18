const input = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `1`
).split("\n");
const N = +input;
const mod = 1000000000;

let dp = Array.from(Array(N + 1), () => new Array(10).fill(0));

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j + 1] % mod;
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][j - 1] % mod;
    } else {
      dp[i][j] = (dp[i - 1][j + 1] + dp[i - 1][j - 1]) % mod;
    }
  }
}

const result = dp[N].reduce((acc, cur) => {
  return (acc + cur) % mod;
}, 0);
console.log(result);
