const [t, ...nm] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3\n2 2\n1 5\n13 29`
).split("\n");

const T = +t;
const NM = nm.map((el) => el.split(" ").map((v) => +v));
let DP = Array(30 + 1).fill(0);
DP[0] = BigInt(1);
DP[1] = BigInt(1);

const getFactorial = (n) => {
  if (n == 0) return DP[0];
  if (n == 1) return DP[1];
  for (let i = 2; i <= n; i++) {
    if (DP[n] !== 0) {
      return DP[n];
    }
    DP[i] = DP[i - 1] * BigInt(i);
  }
  return DP[n];
};

const main = () => {
  for (let i = 0; i < T; i++) {
    const [N, M] = NM[i];
    console.log("M :", M);
    console.log("N :", N);
    const M_factorial = getFactorial(M);
    console.log(M_factorial);
    const N_factorial = getFactorial(N);
    console.log(N_factorial);
    const M_minus_N_factorial = getFactorial(M - N);
    console.log(M_minus_N_factorial);
    console.log(DP);
    const mCn = M_factorial / (N_factorial * M_minus_N_factorial);
    const result = mCn;
    console.log("result :", parseInt(result));
    console.log("----");
  }
};
main();
