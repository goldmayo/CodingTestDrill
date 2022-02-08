const [T, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3\n8\n0 0\n7 0\n100\n0 0\n30 50\n10\n1 1\n1 1`
).split("\n");

const steps = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
];
const createChessfield = (num) => {
  let result = Array.from(Array(Number(num)), () => new Array(Number(num)).fill(0));
  return result;
};

const bfs = (x, y, targetX, targetY, length, visit) => {
  const L = Number(length);
  let idx = 0;
  visit[x][y] = 1;
  const queue = [[x, y]];
  while (idx !== queue) {
    let [qx, qy] = queue[idx++];
    if (qx === targetX && qy === targetY) {
      console.log(visit[qx][qy] - 1);
      return;
    }
    for (const step of steps) {
      let nx = qx + step[0];
      let ny = qy + step[1];
      if (nx < 0 || nx >= L || ny < 0 || ny >= L) continue;
      if (visit[nx][ny] === 0) {
        visit[nx][ny] = visit[qx][qy] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

const solution = () => {
  let testCase = +T;
  const iterator = inputs[Symbol.iterator]();
  while (testCase--) {
    let l = iterator.next().value;
    let chessfield = createChessfield(l);
    let [startX, startY] = iterator.next().value.split(" ").map(Number);
    let [destX, destY] = iterator.next().value.split(" ").map(Number);
    bfs(startX, startY, destX, destY, l, chessfield);
  }
};
solution();
