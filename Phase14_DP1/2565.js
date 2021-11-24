const [n, ...ab] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `8\n1 8\n3 9\n2 2\n4 1\n6 4\n10 10\n9 7\n7 6`
).split("\n");

const N = +n;
const AB = ab.map((e) => e.split(" ").map((e) => +e));
const B = new Array(N);
let dp = new Array(N);
for (let i = 0; i < N; i++) {
  AB.sort((a, b) => a[0] - b[0]);
}
for (let j = 0; j < N; j++) {
  B[j] = AB[j][1];
}

for (let i = 0; i < N; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (B[j] < B[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(N - Math.max(...dp));
