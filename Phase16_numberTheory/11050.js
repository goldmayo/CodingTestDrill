const input = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 0`
).split("\n");

const [N, K] = input[0].split(" ").map((v) => +v);

const getFactorial = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * getFactorial(n - 1);
};
const main = () => {
  const N_facorial = getFactorial(N);
  const K_factorial = getFactorial(K);
  const N_minus_K_factorial = getFactorial(N - K);
  console.log(N_facorial / (K_factorial * N_minus_K_factorial));
};
main();
/**
 * 이항계수 (조합)
 * nCk = n!/(k!*(n-k)!) (0 <= k <= n)
 * 0                    (k < 0)
 * 0                    (k > n)
 */
