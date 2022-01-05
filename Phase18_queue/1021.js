const [nm, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `10 10\n1 6 3 2 7 9 8 4 10 5`
).split("\n");
// `10 3\n1 2 3`
// `10 3\n2 9 5`
// `32 6\n27 16 30 11 6 23`
// 배열로 하는 게 더 쉬울 듯
class node {
  value;
  next;
  prev;
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyCircularQueue {
  length;
  head;
  tail;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(x) {
    const _newNode = new node(x);
    if (this.length === 0) {
      this.head = _newNode;
      this.tail = _newNode;
    } else {
      _newNode.prev = this.tail;
      this.tail.next = _newNode;
      this.tail = _newNode;
    }
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.length++;
  }
  pop() {
    let value;
    if (this.len === 0) {
      return -1;
    } else if (this.len === 1) {
      value = this.head.value;
      this.head = null;
      this.tail = null;
    } else {
      value = this.head.value;
      this.head = this.head.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }
    this.length--;
    return value;
  }
  left() {
    const tmpNode = this.head;
    this.head = this.head.next;
    this.tail = tmpNode;
    this.tail.next = this.head;
    this.head.prev = this.tail;
  }
  right() {
    const tmpNode = this.head;
    this.head = this.tail;
    this.tail = this.tail.prev;
    this.head.next = tmpNode;
    this.tail.next = this.head;
  }
  front() {
    return this.length === 0 ? -1 : this.head.value;
  }
  size() {
    return this.length === 0 ? -1 : this.length;
  }
  prevSearch(x) {
    let count = 0;
    const head = this.head;
    while (true) {
      if (this.head.value === x) {
        break;
      } else {
        this.head = this.head.prev;
        count++;
      }
    }
    this.head = head;
    return count;
  }
  nextSearch(x) {
    let count = 0;
    const head = this.head;
    while (true) {
      if (this.head.value === x) {
        break;
      } else {
        this.head = this.head.next;
        count++;
      }
    }
    this.head = head;
    return count;
  }
}

const [N, M] = nm.split(" ").map((e) => +e);
const position = input[0].split(" ").map((e) => +e);
const dcq = new doublyCircularQueue();
let target = 0;
let answer = 0;

for (let i = 1; i <= N; i++) {
  dcq.push(i);
}
while (true) {
  let nowHead = dcq.front();
  if (position[target] === nowHead) {
    dcq.pop();
    target++;
    if (target === M) break;
  } else {
    let minLeft = dcq.nextSearch(position[target]);
    let minRight = dcq.prevSearch(position[target]);
    if (minLeft <= minRight) {
      while (minLeft--) {
        dcq.left();
        answer++;
      }
    } else {
      while (minRight--) {
        dcq.right();
        answer++;
      }
    }
  }
}
console.log(answer);
