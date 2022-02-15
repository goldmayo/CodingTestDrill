class MinHeap {
  constructor() {
    this.heap = [];
  }
  empty() {
    return this.heap.length === 0 ? true : false;
  }
  swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return;
  }
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex][1] >= this.heap[parentIndex][1]) break;
      this.swap(this.heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }
  bubbleDown(index) {
    let leftchildIndex = 2 * index + 1;
    let rightchildIndex = 2 * index + 2;
    let length = this.heap.length;
    let minIndex = index;
    if (leftchildIndex < length && this.heap[leftchildIndex][1] < this.heap[minIndex][1]) {
      minIndex = leftchildIndex;
    }
    if (rightchildIndex < length && this.heap[rightchildIndex][1] < this.heap[minIndex][1]) {
      minIndex = rightchildIndex;
    }
    if (minIndex !== index) {
      this.swap(this.heap, index, minIndex);
      this.bubbleDown(minIndex);
    }
  }
}
const [t, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `2\n5 4 2\n1 2 3\n1 2 6\n2 3 2\n3 4 4\n3 5 3\n5\n4\n6 9 2\n2 3 1\n1 2 1\n1 3 3\n2 4 4\n2 5 5\n3 4 3\n3 6 2\n4 5 4\n4 6 3\n5 6 7\n5\n6`
).split("\n");
const iterator = inputs[Symbol.iterator]();
const INF = Number.POSITIVE_INFINITY;

const dijkstra = (start, graph) => {
  const distance = Array(graph.length).fill(INF);
  const pq = new MinHeap();
  distance[start] = 0;
  pq.push([start, 0]);
  while (!pq.empty()) {
    const [currentVertex, currentCost] = pq.pop();
    for (let i = 0; i < graph[currentVertex].length; i++) {
      const [nextVertex, nextCost] = graph[currentVertex][i];
      if (distance[nextVertex] > currentCost + nextCost) {
        distance[nextVertex] = currentCost + nextCost;
        pq.push([nextVertex, currentCost + nextCost]);
      }
    }
  }
  return distance;
};

const solution = () => {
  let T = +t;
  while (T--) {
    let [n, m, t] = iterator.next().value.split(" ").map(Number);
    let [s, g, h] = iterator.next().value.split(" ").map(Number);
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < m; i++) {
      let [a, b, d] = iterator.next().value.split(" ").map(Number);
      graph[a].push([b, d]);
      graph[b].push([a, d]);
    }
    const targetVertex = [];
    for (let j = 0; j < t; j++) {
      let target = +iterator.next().value;
      targetVertex.push(target);
    }

    let fromS = dijkstra(s, graph);
    let fromG = dijkstra(g, graph);
    let fromH = dijkstra(h, graph);

    let answer = [];
    for (let i = 0; i < t; i++) {
      let vertex = targetVertex[i];
      if (fromS[vertex] === INF || fromG[vertex] === INF || fromH[vertex] === INF) continue;
      const base = fromS[vertex];
      const routeA = fromS[g] + fromG[h] + fromH[vertex];
      const routeB = fromS[h] + fromH[g] + fromG[vertex];
      if (base === routeA || base === routeB) {
        answer.push(vertex);
      }
    }
    console.log(answer.sort((a, b) => a - b).join(" "));
  }
};
solution();
