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
