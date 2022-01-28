const [v, m, ...e] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `7\n6\n2 3\n1 2\n1 5\n5 2\n5 6\n4 7`
).split("\n");
let answer = 0;
const V = +v;
const numberOfEdges = +m;
const visited = Array(V + 1).fill(false);
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
  for (let i = 1; i < numOfVertex + 1; i++) {
    graph[i].sort((a, b) => a - b);
  }
  return graph;
};

const BFS = (graph, vertex) => {
  const queue = [];
  queue.push(vertex);
  visited[vertex] = true;
  while (queue.length !== 0) {
    let x = queue.shift();
    answer++;
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
  const graph = createGraph(edges, V);
  BFS(graph, 1);
  console.log(answer - 1);
};
main();
