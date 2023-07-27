const [ve, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `6 5\n1 2\n2 5\n5 1\n3 4\n4 6`
).split("\n");
// `6 8\n1 2\n2 5\n5 1\n3 4\n4 6\n5 4\n2 4\n2 3`

const [vertex_number, edge_number] = ve.split(" ").map(Number);
const iterator = inputs[Symbol.iterator]();
const adj = Array.from({ length: vertex_number }, () => new Array(vertex_number).fill(0));
const visited = new Array(vertex_number).fill(false);
let connected_component_counts = 0;

const createGraph = (edge) => {
  let K = edge;
  while (K--) {
    const [u, v] = iterator.next().value.split(" ").map(Number);
    adj[u - 1][v - 1] = 1;
    adj[v - 1][u - 1] = 1;
  }
};

const dfs = (start, visited) => {
  visited[start] = true;
  for (let neighbor in adj[start]) {
    if (adj[start][neighbor] === 1 && !visited[neighbor]) {
      dfs(neighbor, visited);
    }
  }
};

function main() {
  createGraph(edge_number);

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      dfs(i, visited);
      connected_component_counts += 1;
    }
  }
  return connected_component_counts;
}

console.log(main());
