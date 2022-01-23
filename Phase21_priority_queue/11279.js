const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `13\n0\n1\n2\n0\n0\n3\n2\n1\n0\n0\n0\n0\n0`
).split("\n");

const N = +n;
const commands = inputs.map(Number);

class MaxHeap {
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
      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
  }
  bubbleDown(index) {
    const leftNodeIndex = 2 * index + 1;
    const rightNodeIndex = 2 * index + 2;
    const length = this.heap.length;
    let maxIndex = index;
    if (leftNodeIndex < length && this.heap[leftNodeIndex] > this.heap[maxIndex]) {
      maxIndex = leftNodeIndex;
    }
    if (rightNodeIndex < length && this.heap[rightNodeIndex] > this.heap[maxIndex]) {
      maxIndex = rightNodeIndex;
    }
    if (maxIndex !== index) {
      [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
      this.bubbleDown(maxIndex);
    }
  }
}
const main = () => {
  const answer = [];
  const maxHeap = new MaxHeap();
  for (const e of commands) {
    if (e === 0) {
      maxHeap.empty() ? answer.push(0) : answer.push(maxHeap.pop());
    } else {
      maxHeap.insert(e);
    }
  }
  console.log(answer.join("\n"));
};
main();
