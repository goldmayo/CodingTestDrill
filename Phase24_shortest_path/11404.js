const [n, m, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5\n14\n1 2 2\n1 3 3\n1 4 1\n1 5 10\n2 4 2\n3 4 1\n3 5 1\n4 5 3\n3 5 10\n3 1 8\n1 4 2\n5 1 7\n3 4 2\n5 2 4`
).split("\n");
const N = +n;
const M = +m;
const busInfo = inputs.map((bus) => bus.split(" ").map(Number));
const INF = Number.POSITIVE_INFINITY;
const graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(INF));
for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    if (i === j) {
      graph[i][j] = 0;
    }
  }
}

for (const bus of busInfo) {
  const [a, b, c] = bus;
  graph[a][b] = Math.min(graph[a][b], c);
}
for (let k = 1; k < N + 1; k++) {
  for (let a = 1; a < N + 1; a++) {
    for (let b = 1; b < N + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}
for (let a = 1; a < N + 1; a++) {
  graph[a].shift();
}
graph.shift();
for (let a = 0; a < N; a++) {
  for (let b = 0; b < N; b++) {
    if (graph[a][b] === INF) {
      graph[a][b] = 0;
    }
  }
}
for (let i = 0; i < N; i++) {
  console.log(graph[i].join(" "));
}
