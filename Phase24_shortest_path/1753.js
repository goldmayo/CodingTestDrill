{
  //heap = [[cost,vertex],[],...,[]]
  class MinHeap {
    constructor() {
      this.heap = [];
    }
    empty() {
      return this.heap.length === 0 ? true : false;
    }
    push(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
    bubbleUp() {
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[parentIndex][0] < this.heap[currentIndex][0]) break;
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      }
    }
    pop() {
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return min;
    }
    bubbleDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      const length = this.heap.length;
      let minIndex = index;
      if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[minIndex][0]) {
        minIndex = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[minIndex][0]) {
        minIndex = rightChildIndex;
      }
      if (minIndex !== index) {
        [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
        this.bubbleDown(minIndex);
      }
    }
  }
  const [ve, s, ...inputs] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
      : `5 6\n1\n5 1 1\n1 2 2\n1 3 3\n2 3 4\n2 4 5\n3 4 6`
  ).split("\n");

  const [V, E] = ve.split(" ").map(Number);
  const start = +s;
  const edges = inputs.map((edge) => edge.split(" ").map(Number));
  const INF = Number.POSITIVE_INFINITY;
  const dist = Array(V + 1).fill(INF);

  const createGraph = (edgeList) => {
    const graph = Array(V + 1);
    for (let i = 0; i <= V; i++) {
      graph[i] = [];
    }
    for (let i = 0; i < edgeList.length; i++) {
      let [u, v, c] = edgeList[i];
      graph[u].push([v, c]);
    }
    return graph;
  };

  const graph = createGraph(edges);

  const dijkstra = (startNode) => {
    const minQueue = new MinHeap();
    minQueue.push([0, startNode]);
    dist[start] = 0;
    while (!minQueue.empty()) {
      let [distance, curIndex] = minQueue.pop();
      if (dist[curIndex] < distance) continue;
      let x = graph[curIndex];
      for (let i = 0; i < x.length; i++) {
        let cost = distance + x[i][1];
        if (cost < dist[x[i][0]]) {
          dist[x[i][0]] = cost;
          minQueue.push([cost, x[i][0]]);
        }
      }
    }
  };

  const solution = () => {
    let answer = "";
    dijkstra(start);
    for (let i = 1; i <= V; i++) {
      dist[i] === Number.POSITIVE_INFINITY ? (answer += `INF\n`) : (answer += `${dist[i]}\n`);
    }
    console.log(answer);
  };
  solution();
}
