{
  const input = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
      : `2`
  ).split("\n");
  const N = +input;
  let dp = Array.from(new Array(N + 1).fill(-1));

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
  }
  console.log(dp[N]);
}

{
  const input = (
    process.platform === "linux"
      ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
      : `10`
  ).split("\n");
  const N = +input;
  let dp = Array.from(new Array(N + 1).fill(-1));

  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  for (let i = 5; i <= N; i++) {
    let A = Number.MAX_SAFE_INTEGER;
    let B = Number.MAX_SAFE_INTEGER;
    let C = Number.MAX_SAFE_INTEGER;
    if (i % 3 === 0) {
      A = dp[i / 3] + 1;
    }
    if (i % 2 === 0) {
      B = dp[i / 2] + 1;
    }
    C = dp[i - 1] + 1;
    dp[i] = Math.min(A, B, C);
  }
  console.log(dp[N]);
}
