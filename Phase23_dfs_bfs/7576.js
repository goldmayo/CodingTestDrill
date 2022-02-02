const [mn, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `6 4\n1 -1 0 0 0 0\n0 -1 0 0 0 0\n0 0 0 0 -1 0\n0 0 0 0 -1 1`
).split("\n");
// `6 4\n0 -1 0 0 0 0\n-1 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 1`
// `5 5\n-1 1 0 0 0\n0 -1 -1 -1 0\n0 -1 -1 -1 0\n0 -1 -1 -1 0\n0 0 0 0 0`
// `5 5\n-1 1 -1 0 0\n0 0 -1 1 0\n0 0 -1 0 -1\n0 1 0 0 0\n0 0 -1 0 -1`
// `2 2\n1 -1\n-1 1`
// `6 4\n1 -1 0 0 -1 1\n0 -1 0 0 0 0\n1 -1 0 0 -1 0\n0 0 0 0 -1 1`
// `6 4\n0 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 1`
const [M, N] = mn.split(" ").map(Number);
const locationOfTomato = [];
let tomatoZeroFlag = false;
const days = Array.from(Array(N), () => new Array(M).fill(0));
const BOX = inputs.map((e, row) =>
  e.split(" ").map((v, col) => {
    if (+v === -1) days[row][col] = -1;
    if (+v === 1) {
      locationOfTomato.push([row, col]);
      days[row][col] = 1;
    }
    if (+v === 0) tomatoZeroFlag = true;
    return +v;
  })
);
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let answer;

const checkBoundary = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < M ? true : false;
};

const BFS = (queue) => {
  let number = 0;
  while (number !== queue.length) {
    let [qx, qy] = [queue[number][0], queue[number][1]];
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [qx + dx[i], qy + dy[i]];
      if (checkBoundary(nx, ny) && days[nx][ny] === 0 && BOX[nx][ny] === 0) {
        queue.push([nx, ny]);
        days[nx][ny] = days[qx][qy] + 1;
        answer = days[nx][ny] - 1;
      }
    }
    number++;
  }
};

const solution = () => {
  BFS(locationOfTomato);
  if (!tomatoZeroFlag) {
    answer = 0;
  } else {
    for (const row of days) {
      if (row.includes(0)) {
        answer = -1;
        break;
      }
    }
  }
  console.log(answer);
};
solution();
