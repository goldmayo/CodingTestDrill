const [nm, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3 6\n010000\n010111\n000110`
).split("\n");
// `4 4\n0111\n1111\n1111\n1110`
// `6 4\n0100\n1110\n1000\n0000\n0111\n0000`
// `6 4\n0000\n1110\n1000\n0010\n0111\n0100`
const [N, M] = nm.split(" ").map(Number);
const MAP = inputs.map((e) => e.split("").map(Number));
const visit = Array.from(Array(N), () => Array.from(Array(M), () => new Array(2).fill(0)));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const checkBound = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < M ? true : false;
};
const bfs = (x, y, z) => {
  visit[x][y][z] = 1;
  const queue = [[x, y, z]];
  let idx = 0;
  while (idx !== queue.length) {
    console.log(visit);
    let [qx, qy, qz] = queue[idx++];

    if (qx === N - 1 && qy === M - 1) {
      console.log(visit[qx][qy][qz]);
      return;
    }
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [qx + dx[i], qy + dy[i]];
      console.log(nx, ny);
      if (!checkBound(nx, ny)) continue;
      if (visit[nx][ny][qz] === 0) {
        if (MAP[nx][ny] === 0) {
          visit[nx][ny][qz] = visit[qx][qy][qz] + 1;
          queue.push([nx, ny, qz]);
        } else {
          if (qz === 0) {
            visit[nx][ny][qz + 1] = visit[qx][qy][qz] + 1;
            queue.push([nx, ny, qz + 1]);
          }
        }
      }
    }
  }
  console.log(-1);
};
const solution = () => {
  console.log(MAP);
  bfs(0, 0, 0);
};
solution();
