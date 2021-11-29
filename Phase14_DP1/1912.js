const [n, inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `10\n10 -4 3 1 5 6 -35 12 21 -1`
).split("\n");

const N = +n;
const input = inputs.split(" ").map((e) => +e);

let dp = [input[0]];

for (let i = 1; i < N; i++) {
  if (input[i] < input[i] + dp[i - 1]) {
    dp[i] = input[i] + dp[i - 1];
  } else {
    dp[i] = input[i];
  }
}
console.log(Math.max(...dp));

/**
 * 1 나 자신만 선택(나 자신부터 값을 더한다)하거나
 * 2 앞의 값과 더하거나
 *
 * index : 0   1  2  3  4  5   6  7  8  9
 * input : 10 -4  3  1  5  6 -35 12 21 -1
 *
 * 2 : [10][6][9][10][15][21][-14] -2 [33][31]
 * 1 :     -4  3   1   5   6  -35 [12] 21  -1
 */
