const [N, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `4\n0 1 2 3\n4 0 5 6\n7 1 0 2\n3 4 5 0`
).split("\n");

const STAT = input.slice().map((str) => str.split(" ").map(Number));
let teamCheck = Array(N).fill(false);
let min = Number.MAX_SAFE_INTEGER;

function dfs(index, next) {
  if (min === 0) return;
  if (index === N / 2) {
    const start = [];
    const link = [];
    let scoreStart = 0;
    let scoreLink = 0;
    for (let i = 0; i < N; i++) {
      if (teamCheck[i]) start.push(i);
      else link.push(i);
    }
    for (let i = 0; i < N / 2; i++) {
      for (let j = i + 1; j < N / 2; j++) {
        scoreStart += STAT[start[i]][start[j]] + STAT[start[j]][start[i]];
        scoreLink += STAT[link[i]][link[j]] + STAT[link[j]][link[i]];
      }
    }
    min = Math.min(min, Math.abs(scoreStart - scoreLink));
    return;
  }
  for (let i = next; i < N; i++) {
    teamCheck[i] = true;
    dfs(index + 1, i + 1);
    teamCheck[i] = false;
  }
}

function solution() {
  dfs(0, 0);
  console.log(min);
}
console.time("start");
solution();
console.timeEnd("start");
