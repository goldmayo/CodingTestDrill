{
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

  const createGraph = (edgeList) => {
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const edge of edgeList) {
      let [start, dest, cost] = edge;
      graph[start].push([dest, cost]);
      graph[dest].push([start, cost]);
    }
    return graph;
  };

  const [ne, ...inputs] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
      : `4 6\n1 2 3\n2 3 3\n3 4 1\n1 3 5\n2 4 5\n1 4 4\n2 3`
  ).split("\n");

  const INF = Number.POSITIVE_INFINITY;
  const [N, E] = ne.split(" ").map(Number);
  const [v1, v2] = inputs.pop().split(" ").map(Number);
  const edges = inputs.map((e) => e.split(" ").map(Number));
  const graph = createGraph(edges);

  const dijkstra = (start) => {
    const distance = Array(N + 1).fill(INF);
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
    let fromOne = dijkstra(1);
    let fromV1 = dijkstra(v1);
    let fromV2 = dijkstra(v2);
    const answer = Math.min(
      fromOne[v1] + fromV1[v2] + fromV2[N],
      fromOne[v2] + fromV2[v1] + fromV1[N]
    );
    console.log(answer !== INF ? answer : -1);
  };
  solution();
}
