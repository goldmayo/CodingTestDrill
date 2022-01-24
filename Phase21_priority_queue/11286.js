const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `18\n1\n-1\n0\n0\n0\n1\n1\n-1\n-1\n2\n-2\n0\n0\n0\n0\n0\n0\n0`
).split("\n");

const N = +n;
const commands = inputs.map(Number);

class minHeap {
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
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        Math.abs(this.heap[currentIndex]) > Math.abs(this.heap[parentIndex]) ||
        (Math.abs(this.heap[currentIndex]) === Math.abs(this.heap[parentIndex]) &&
          this.heap[currentIndex] > this.heap[parentIndex])
      ) {
        break;
      }

      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
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
    const leftNodeIndex = 2 * index + 1;
    const rightNodeIndex = 2 * index + 2;
    const length = this.heap.length;
    let minIndex = index;
    if (
      (leftNodeIndex < length &&
        Math.abs(this.heap[leftNodeIndex]) < Math.abs(this.heap[minIndex])) ||
      (Math.abs(this.heap[leftNodeIndex]) === Math.abs(this.heap[minIndex]) &&
        this.heap[leftNodeIndex] < this.heap[minIndex])
    ) {
      minIndex = leftNodeIndex;
    }

    if (
      (rightNodeIndex < length &&
        Math.abs(this.heap[rightNodeIndex]) < Math.abs(this.heap[minIndex])) ||
      (Math.abs(this.heap[rightNodeIndex]) === Math.abs(this.heap[minIndex]) &&
        this.heap[rightNodeIndex] < this.heap[minIndex])
    ) {
      minIndex = rightNodeIndex;
    }

    if (minIndex !== index) {
      [this.heap[minIndex], this.heap[index]] = [this.heap[index], this.heap[minIndex]];
      this.bubbleDown(minIndex);
    }
  }
}
const main = () => {
  let answer = [];
  let minheap = new minHeap();
  for (const e of commands) {
    if (e === 0) {
      minheap.empty() ? answer.push(0) : answer.push(minheap.pop());
    } else {
      minheap.insert(e);
      console.log(minheap);
    }
  }
  console.log(answer.join("\n"));
};
main();
