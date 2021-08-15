const [n, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `5\n7\n3 8\n8 1 0\n2 7 4 4\n4 5 2 6 5`
).split("\n");

const N = +n;
const TRI = input.slice().map((str) => str.split(" ").map(Number));

let dpTable = Array.from(
  input.slice().map((str) => str.split(" ").map(() => (x = 0)))
);

console.log(TRI);
console.log(dpTable);

function calculateTRI() {
  dpTable[0] = TRI[0];
  for (let i = 1; i < N; i++) {
    let prev = dpTable[i - 1].length;
    for (let j = 0; j < prev; j++) {
      let leftChild = dpTable[i - 1][j] + TRI[i][j];
      let rightChild = dpTable[i - 1][j] + TRI[i][j + 1];
      dpTable[i][j] !== 0
        ? (dpTable[i][j] = Math.max(dpTable[i][j], leftChild))
        : (dpTable[i][j] = dpTable[i - 1][j] + TRI[i][j]);
      dpTable[i][j + 1] !== 0
        ? (dpTable[i][j + 1] = Math.max(dpTable[i][j + 1], rightChild))
        : (dpTable[i][j + 1] = dpTable[i - 1][j] + TRI[i][j + 1]);
    }
  }
  return Math.max(...dpTable[N - 1]);
}

function solution() {
  let result = calculateTRI();
  console.log(dpTable);
  console.log(result);
}
solution();
