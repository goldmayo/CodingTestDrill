const [A, B] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `ACAYKP\nCAPCAK`
).split("\n");
// console.log(A);
// console.log(B);

function LCSLength(X, Y) {
  const XLEN = X.length;
  const YLEN = Y.length;
  DP = Array.from(Array(XLEN + 1), () => new Array(YLEN + 1));
  //   console.log(DP);
  for (let i = 0; i <= XLEN; i++) {
    DP[i][0] = 0;
  }
  for (let j = 0; j <= YLEN; j++) {
    DP[0][j] = 0;
  }
  for (let i = 1; i <= XLEN; i++) {
    for (let j = 1; j <= YLEN; j++) {
      if (X[i - 1] === Y[j - 1]) {
        DP[i][j] = DP[i - 1][j - 1] + 1;
      } else {
        DP[i][j] = Math.max(DP[i][j - 1], DP[i - 1][j]);
      }
    }
  }
  //   console.log(DP);
  return DP[XLEN][YLEN];
}

console.log(LCSLength(A, B));
