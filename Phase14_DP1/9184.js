const [...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `1 1 1\n2 2 2\n10 4 6\n50 50 50\n-1 7 18\n-1 -1 0\n19 19 19\n-1 -1 -1`
).split("\n");
let result = [];
const ABC = input.slice().map((str) => str.split(" ").map(Number));
let DP = Array.from(Array(21), () =>
  Array.from(Array(21), () => Array(21).fill(0))
);

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }
  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  }
  if (DP[a][b][c] !== 0) {
    return DP[a][b][c];
  }
  if (a < b && b < c) {
    DP[a][b][c - 1] = w(a, b, c - 1);
    DP[a][b - 1][c - 1] = w(a, b - 1, c - 1);
    DP[a][b - 1][c] = w(a, b - 1, c);
    return (DP[a][b][c] =
      DP[a][b][c - 1] + DP[a][b - 1][c - 1] - DP[a][b - 1][c]);
  }

  DP[a - 1][b][c] = w(a - 1, b, c);
  DP[a - 1][b - 1][c] = w(a - 1, b - 1, c);
  DP[a - 1][b][c - 1] = w(a - 1, b, c - 1);
  DP[a - 1][b - 1][c - 1] = w(a - 1, b - 1, c - 1);
  return (DP[a][b][c] =
    DP[a - 1][b][c] +
    DP[a - 1][b - 1][c] +
    DP[a - 1][b][c - 1] -
    DP[a - 1][b - 1][c - 1]);
}

function solution() {
  for (const num of ABC) {
    let [a, b, c] = num;
    if (a === -1 && b === -1 && c === -1) break;
    // console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
    result.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  }
  console.log(result.join("\n"));
}
solution();
