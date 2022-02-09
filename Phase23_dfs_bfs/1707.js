const [k, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `2\n3 2\n1 3\n2 3\n4 4\n1 2\n2 3\n3 4\n4 2`
).split("\n");

const iterator = inputs[Symbol.iterator]();
let isBipartite = true;

const createGraph = (edgeList, numOfVertex) => {
  const graph = Array(numOfVertex + 1);
  for (let i = 0; i <= numOfVertex; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < edgeList.length; i++) {
    graph[edgeList[i][0]].push(edgeList[i][1]);
    graph[edgeList[i][1]].push(edgeList[i][0]);
  }
  return graph;
};

const bfs = (start, graph, colorArr) => {
  let idx = 0;
  const queue = [];
  queue.push(start);
  colorArr[start] = 1;
  while (idx !== queue.length && isBipartite) {
    let u = queue[idx++];
    for (const v of graph[u]) {
      if (colorArr[v] === 0) {
        queue.push(v);
        colorArr[v] = colorArr[u] * -1;
      } else if (colorArr[u] + colorArr[v] !== 0) {
        isBipartite = false;
        return;
      }
    }
  }
};

const solution = () => {
  let K = +k;
  let answer = "";
  while (K--) {
    const [V, E] = iterator.next().value.split(" ").map(Number);
    const edges = [];
    const COLORS = Array(V + 1).fill(0);
    for (let i = 0; i < E; i++) {
      edges.push(iterator.next().value.split(" ").map(Number));
    }
    const graph = createGraph(edges, V);
    for (let i = 1; i < V + 1; i++) {
      if (!isBipartite) break;
      if (COLORS[i] === 0) {
        bfs(i, graph, COLORS);
      }
    }
    isBipartite ? (answer += "YES\n") : (answer += "NO\n");
    isBipartite = true;
  }
  console.log(answer);
};
solution();
