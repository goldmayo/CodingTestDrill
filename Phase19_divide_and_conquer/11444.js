// https://cocoon1787.tistory.com/349 정석 풀이
// https://www.acmicpc.net/board/view/75544 테스트케이스
const n = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `10000000000000000`
).split("\n");

const N = BigInt(n);
const MOD = BigInt(1000000007);
let dp = [];

const docagne = (n) => {
  if (n === 0n) return (dp[0] = 0n);
  if (n === 1n) return (dp[1] = 1n);
  if (n === 2n) return (dp[2] = 1n);
  if (dp[n] !== undefined) return dp[n];
  if (n % 2n === 0n) {
    let m = docagne(n / 2n - 1n);
    let k = docagne(n / 2n);
    dp[n] = (((2n * m + k) % MOD) * k) % MOD;
    return dp[n];
  } else {
    let m = docagne(n / 2n + 1n);
    let k = docagne(n / 2n);
    dp[n] = (((m * m) % MOD) % MOD) + (((k * k) % MOD) % MOD);
    return dp[n];
  }
};

const main = () => {
  console.log(parseInt(docagne(N) % MOD));
};
main();
