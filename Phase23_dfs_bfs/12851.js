const [input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 17`
).split("\n");

const [N, K] = input.split(" ").map(Number);
const visitied = Array(N + 1).fill(false);

class node {
  value;
  next;
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  empty() {
    return this.size === 0 ? true : false;
  }
  push(value) {
    const newNode = new node(value);
    if (this.head === null) {
      this.head = newNode;
      this.head.next = null;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }
  pop() {
    if (this.empty()) return;
    const node = this.head;
    this.head = this.head.next;
    this.size--;
    return node.value;
  }
}

const BFS = (location, target) => {
  const ways = [];
  const queue = new Queue();
  queue.push([location, 0]);
  let minTime = Number.MAX_SAFE_INTEGER;
  while (!queue.empty()) {
    let [loc, time] = queue.pop();

    if (minTime < time) continue;
    console.log(loc, time);
    visitied[loc] = true;
    if (loc === target) {
      minTime = Math.min(minTime, time);
      ways.push(time);
      continue;
    }

    if (loc + 1 <= 100000 && !visitied[loc + 1]) {
      queue.push([loc + 1, time + 1]);
    }
    if (loc * 2 <= 100000 && !visitied[loc * 2]) {
      queue.push([loc * 2, time + 1]);
    }
    if (0 <= loc - 1 && !visitied[loc - 1]) {
      queue.push([loc - 1, time + 1]);
    }
  }
  return ways;
};

const solution = () => {
  //   const answer = BFS(N, K);
  const answer = BFS(5, 17);
  console.log(`${answer[0]}\n${answer.length}`);
};
solution();
// {
//   const BFS2 = (location, target) => {
//     const ways = [];
//     const queue = [[location, 0]];
//     let minTime = Number.MAX_SAFE_INTEGER;
//     let number = 0;
//     while (number != queue.length) {
//       let [loc, time] = queue[number++];
//       console.log(queue);
//       if (minTime < time) continue;
//       visitied[loc] = true;
//       if (loc === target) {
//         console.log(minTime, time);
//         minTime = Math.min(minTime, time);
//         ways.push(time);
//         continue;
//       }

//       if (loc + 1 <= 100000 && !visitied[loc + 1]) {
//         queue.push([loc + 1, time + 1]);
//       }
//       if (loc * 2 <= 100000 && !visitied[loc * 2]) {
//         queue.push([loc * 2, time + 1]);
//       }
//       if (0 <= loc - 1 && !visitied[loc - 1]) {
//         queue.push([loc - 1, time + 1]);
//       }
//     }
//     return ways;
//   };
//}
