/**
 * BFS = (좌표 or 그래프와 정점) =>{
 *  a 좌표를 4방향 탐색
 *  1 queue 생성
 *  2 queue에 저장
 *  3 방문값 변경
 *    필요 로직
 *  4 queue가 empty가 될 때 까지
 *  5 현재 저장된 좌표와 dx dy에 저장된 방향을 더해 다음 좌표 nx ny를 계산
 *  6 check bound, 주어진 좌표 그래프에서 탐색 가능한 조건 만족, 방문값이 false일 경우
 *  7 다음 좌표 nx ny의 방문값 변경
 *    필요 로직
 *  8 다음 좌표 좌표 nx ny를 queue에 저장
 * }
 */
const [nm, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `4 6\n101111\n101010\n101011\n111011`
).split("\n");

const [N, M] = nm.split(" ").map(Number);
const MAZE = inputs.map((e) => e.split("").map(Number));
const visited = Array.from(Array(N), () => new Array(M).fill(false));
const dist = Array.from(Array(N), () => new Array(M).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const checkBoundary = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < M ? true : false;
};

const BFS = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = true;
  dist[x][y] = 1;
  while (queue.length !== 0) {
    let [qx, qy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = qx + dx[i];
      let ny = qy + dy[i];
      if (checkBoundary(nx, ny) && MAZE[nx][ny] === 1) {
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          dist[nx][ny] = dist[qx][qy] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
};

const main = () => {
  BFS(0, 0);
  console.log(dist[N - 1][M - 1]);
};
main();
