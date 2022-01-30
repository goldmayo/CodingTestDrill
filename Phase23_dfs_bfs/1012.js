const [t, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `1\n5 3 6\n0 2\n1 2\n2 2\n3 2\n4 2\n4 0`
).split("\n");
// `2\n10 8 17\n0 0\n1 0\n1 1\n4 2\n4 3\n4 5\n2 4\n3 4\n7 4\n8 4\n9 4\n7 5\n8 5\n9 5\n7 6\n8 6\n9 6\n10 10 1\n5 5`
const T = +t;
const iterator = inputs[Symbol.iterator]();
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let wormCount = 0;
const answer = [];
const createGraph = (row, col) => {
  const graph = Array.from(Array(row), () => new Array(col).fill(0));
  return graph;
};
const checkBoundary = (x, y, rowSize, colSize) => {
  return x >= 0 && x < rowSize && y >= 0 && y < colSize ? true : false;
};
const DFS = (x, y, rowSize, colSize, graph) => {
  if (checkBoundary(x, y, rowSize, colSize) && graph[x][y] === 1) {
    graph[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      DFS(x + dx[i], y + dy[i], rowSize, colSize, graph);
    }
  }
};
const main = () => {
  for (let i = 0; i < T; i++) {
    let [M, N, K] = iterator.next().value.split(" ").map(Number);
    let graph = createGraph(M, N);
    while (K--) {
      const [x, y] = iterator.next().value.split(" ").map(Number);
      graph[x][y] = 1;
    }
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) {
          DFS(i, j, M, N, graph);
          wormCount += 1;
        }
      }
    }
    answer.push(wormCount);
    wormCount = 0;
  }
  console.log(answer.join("\n"));
};
main();
