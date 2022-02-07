const [nm, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3 6\n010000\n010111\n000110`
).split("\n");
// `4 4\n0111\n1111\n1111\n1110`
// `6 4\n0100\n1110\n1000\n0000\n0111\n0000`
// `6 4\n0000\n1110\n1000\n0010\n0111\n0100`
const [N, M] = nm.split(" ").map(Number);

function initVisit(n, m) {
  let visit = [];
  visit[true] = Array.from(Array(n), () => Array(m).fill(false));
  visit[false] = Array.from(Array(n), () => Array(m).fill(false));
  return visit;
}

let visit2 = initVisit(N, M);
console.log(visit2);

const MAP = inputs.map((e) => e.split("").map(Number));
const visit = Array.from(Array(2), () => Array.from(Array(N), () => new Array(M).fill(0)));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

class node {
  value;
  next;
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  empty() {
    return this.size === 0 ? true : false;
  }
  push(value) {
    const newNode = new node(value);
    if (this.head === null) {
      this.head = newNode;
      this.head.next = null;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }
  pop() {
    if (this.empty()) return;
    const node = this.head;
    this.head = this.head.next;
    this.size--;
    return node.value;
  }
}

const checkBound = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < M ? true : false;
};
const bfs = (x, y, z) => {
  visit[x][y][z] = 1;
  //   const queue = [];
  const queue = new Queue();
  queue.push([x, y, z]);

  //   while (queue.length) {
  while (!queue.empty()) {
    // let [qx, qy, qz] = queue.shift();
    let [qx, qy, qz] = queue.pop();

    if (qx === N - 1 && qy === M - 1) {
      console.log(visit[qx][qy][qz]);
      return;
    }
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [qx + dx[i], qy + dy[i]];

      if (!checkBound(nx, ny)) continue;

      if (MAP[nx][ny] === 0 && visit[nx][ny][qz] === 0) {
        visit[nx][ny][qz] = visit[qx][qy][qz] + 1;
        queue.push([nx, ny, qz]);
      }

      if (MAP[nx][ny] === 1 && qz === 0 && visit[nx][ny][qz + 1] === 0) {
        visit[nx][ny][qz + 1] = visit[qx][qy][qz] + 1;
        queue.push([nx, ny, qz + 1]);
      }
    }
  }
  console.log(-1);
};
const solution = () => {
  bfs(0, 0, 0);
};
solution();

/**
 * 벽을 한 번 부술 수 있다
 * 벽을 부수지 않는 행위를 flag(0)이라고 정의한다.
 * 벽을 부수는 행위를 flag(1)이라고 정의한다.
 * MAP의 좌표 (x,y)의 상태 값으로 볼 수 있다.
 * 즉, 2가지 상태(0,1)와 이동한 칸의 횟수를 각 좌표마다 같이 저장한다.
 * >> bfs(시작좌표(x,y),벽 flag(0))
 * >> queue.push([x,y,z])
 * >> 3차원 배열 visit [좌][표][벽을 안 부수고 간 횟수, 벽을 부수고 간 횟수] > 0 초기화
 * 마지막 좌표에 도달한 경우 return;
 *
 * 4방향 탐색을 진행
 * boundary check
 * 1) 다음 좌표가 벽이 아니고 벽을 부수지 않은 경우
 *   MAP[nx][ny] === 0 && visit[x][y][z] === 0
 *   visit[nx][ny][z] = visit[x][y][z] + 1
 *   push
 *
 * 2) 다음 좌표가 벽이고 벽 flag가 0이고 벽을 부수지 않은 경우
 *   MAP[nx][ny] === 1 && z === 0 && visit[x][y][z+1] === 0
 *   visit[nx][ny][z+1] = visit[x][y][z] + 1
 *   push
 *
 * 초반의 의문점
 * 1. 벽을 부수고 벽을 또 만나면 어캄?
 *  > 그 방향으로 못 감 로직에 걸리는 조건이 없다
 * 2. 처음 마주친 벽을 부수고 나중에 꼭 필요할 때 못 부수면 어캄?
 *  > 처음 벽을 부수는 방향과 부수지 않는 방향 모두 존재할 경우
 *    문제가 되지 않는다. 처음 좌표가 모두 벽으로 둘러 쌓인 경우 각 방향에 따라
 *    탐색을 진행하고 첫번째 조건에 부합하는 좌표가 없는 경우 막힌 MAP이다.
 */
