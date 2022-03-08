const [ve, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3 4\n1 2 1\n3 2 1\n1 3 5\n2 3 2`
).split("\n");
const [V, E] = ve.split(" ").map(Number);
const INF = Number.POSITIVE_INFINITY;
const edgeInfo = inputs.map((edge) => edge.split(" ").map(Number));
let answer = INF;
const graph = Array.from({ length: V + 1 }, () => new Array(V + 1).fill(INF));

for (const edge of edgeInfo) {
  const [a, b, c] = edge;
  graph[a][b] = c;
}

for (let k = 1; k < V + 1; k++) {
  for (let a = 1; a < V + 1; a++) {
    for (let b = 1; b < V + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}
for (let i = 1; i < V + 1; i++) {
  answer = Math.min(answer, graph[i][i]);
}
console.log(answer === INF ? -1 : answer);
