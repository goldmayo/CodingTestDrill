const [nms, ...e] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 6 1\n1 3\n1 5\n3 5\n3 4\n3 2\n2 4`
).split("\n");
// `11 10 1\n1 2\n1 3\n1 4\n1 5\n1 6\n1 7\n1 8\n1 9\n1 10\n1 11`
// `1000 1 1000\n999 1000`
// `4 5 1\n1 2\n1 3\n1 4\n2 4\n3 4`
let answer = [];
const [N, M, S] = nms.split(" ").map(Number);
const visited = Array(N + 1).fill(false);
const edges = e.map((e) => e.split(" ").map(Number));
edges.unshift([]);

const createGraph = (edgeList, numOfVertex) => {
  const graph = Array(numOfVertex + 1);
  for (let i = 0; i <= numOfVertex; i++) {
    graph[i] = [];
  }
  for (let i = 1; i < edgeList.length; i++) {
    graph[edgeList[i][0]].push(edgeList[i][1]);
    graph[edgeList[i][1]].push(edgeList[i][0]);
  }
  console.log(graph);
  for (let i = 1; i < N + 1; i++) {
    graph[i].sort((a, b) => a - b);
  }
  console.log(graph);
  return graph;
};
const DFS = (graph, vertex) => {
  visited[vertex] = true;
  answer.push(vertex);
  for (let v of graph[vertex]) {
    if (!visited[v]) {
      DFS(graph, v);
    }
  }
};
const BFS = (graph, vertex) => {
  const queue = [];
  queue.push(vertex);
  visited[vertex] = true;
  while (queue.length !== 0) {
    let x = queue.shift();
    answer.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let y = graph[x][i];
      if (!visited[y]) {
        queue.push(y);
        visited[y] = true;
      }
    }
  }
};

const main = () => {
  const graph = createGraph(edges, N);
  DFS(graph, S);
  console.log(answer.join(" "));
  answer = [];
  visited.fill(false);
  BFS(graph, S);
  console.log(answer.join(" "));
};
main();
