const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `9\n0\n12345678\n1\n2\n0\n0\n0\n0\n32`
).split("\n");

const N = +n;
const commands = inputs.map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }
  empty() {
    return this.heap.length === 0 ? true : false;
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] < this.heap[currentIndex]) break;
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
    const leftNodeIndex = 2 * index + 1;
    const rightNodeIndex = 2 * index + 2;
    const length = this.heap.length;
    let minIndex = index;
    if (leftNodeIndex < length && this.heap[leftNodeIndex] < this.heap[minIndex]) {
      minIndex = leftNodeIndex;
    }
    if (rightNodeIndex < length && this.heap[rightNodeIndex] < this.heap[minIndex]) {
      minIndex = rightNodeIndex;
    }
    if (minIndex !== index) {
      [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
      this.bubbleDown(minIndex);
    }
  }
}
const main = () => {
  const answer = [];
  const minHeap = new MinHeap();
  for (const e of commands) {
    if (e === 0) {
      minHeap.empty() ? answer.push(0) : answer.push(minHeap.pop());
    } else {
      minHeap.insert(e);
    }
  }
  console.log(answer.join("\n"));
};
main();
