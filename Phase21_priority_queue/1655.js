const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5\n1\n2\n3\n4\n5`
).split("\n");
// `7\n1\n5\n2\n10\n-99\n7\n5`

const N = +n;
const commands = inputs.map(Number);
let minHeap = [];
let maxHeap = [];

const pushMaxHeap = (value) => {
  maxHeap.push(value);
  let currentIndex = maxHeap.length - 1;
  while (currentIndex > 0) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    if (maxHeap[currentIndex] < maxHeap[parentIndex]) break;
    [maxHeap[currentIndex], maxHeap[parentIndex]] = [maxHeap[parentIndex], maxHeap[currentIndex]];
    currentIndex = parentIndex;
  }
};
const popMaxHeap = () => {
  if (maxHeap.length === 1) return maxHeap.pop();
  let max = maxHeap[0];
  maxHeap[0] = maxHeap.pop();
  let currentIndex = 0;
  while (true) {
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;
    let maxIndex = currentIndex;
    if (leftChildIndex < maxHeap.length && maxHeap[leftChildIndex] > maxHeap[maxIndex]) {
      maxIndex = leftChildIndex;
    }
    if (rightChildIndex < maxHeap.length && maxHeap[rightChildIndex] > maxHeap[maxIndex]) {
      maxIndex = rightChildIndex;
    }
    if (maxIndex !== currentIndex) {
      [maxHeap[currentIndex], maxHeap[maxIndex]] = [maxHeap[maxIndex], maxHeap[currentIndex]];
    } else {
      break;
    }
    currentIndex = maxIndex;
  }
  return max;
};
const pushMinHeap = (value) => {
  minHeap.push(value);
  let currentIndex = minHeap.length - 1;
  while (currentIndex > 0) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    if (minHeap[currentIndex] > minHeap[parentIndex]) break;
    [minHeap[currentIndex], minHeap[parentIndex]] = [minHeap[parentIndex], minHeap[currentIndex]];
    currentIndex = parentIndex;
  }
};
const popMinHeap = () => {
  if (minHeap.length === 1) return minHeap.pop();
  let min = minHeap[0];
  minHeap[0] = minHeap.pop();
  let currentIndex = 0;
  while (true) {
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;
    let minIndex = currentIndex;
    if (leftChildIndex < minHeap.length && minHeap[leftChildIndex] < minHeap[minIndex]) {
      minIndex = leftChildIndex;
    }
    if (rightChildIndex < minHeap.length && minHeap[rightChildIndex] < minHeap[minIndex]) {
      minIndex = rightChildIndex;
    }
    if (minIndex !== currentIndex) {
      [minHeap[currentIndex], minHeap[minIndex]] = [minHeap[minIndex], minHeap[currentIndex]];
    } else {
      break;
    }
    currentIndex = minIndex;
  }
  return min;
};
const main = () => {
  let answer = [];
  for (const e of commands) {
    if (maxHeap.length === minHeap.length) {
      pushMaxHeap(e);
    } else if (maxHeap.length - minHeap.length === 1) {
      pushMinHeap(e);
    }
    if (maxHeap[0] > minHeap[0]) {
      let maxHeapRoot = popMaxHeap();
      let minHeapRoot = popMinHeap();
      pushMaxHeap(minHeapRoot);
      pushMinHeap(maxHeapRoot);
    }
    answer.push(maxHeap[0]);
  }
  console.log(answer.join("\n"));
};
main();
