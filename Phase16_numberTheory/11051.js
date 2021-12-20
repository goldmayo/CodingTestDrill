const input = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `1000 500`
).split("\n");

const [N, K] = input[0].split(" ").map((v) => +v);
let DP = Array(N + 1).fill(0);
DP[0] = BigInt(1);
DP[1] = BigInt(1);

const getFactorial = (n) => {
  if (n == 0) return DP[0];
  if (n == 1) return DP[1];
  for (let i = 2; i <= N; i++) {
    if (DP[n] !== 0) {
      return DP[n];
    }
    DP[i] = DP[i - 1] * BigInt(i);
  }
  return DP[n];
};

const main = () => {
  const N_factorial = getFactorial(N);
  const K_factorial = getFactorial(K);
  const N_minus_K_factorial = getFactorial(N - K);
  const nCk = N_factorial / (K_factorial * N_minus_K_factorial);
  const result = nCk % BigInt(10007);
  console.log(parseInt(result));
};
main();
