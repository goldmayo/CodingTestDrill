const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `15\npush 1\npush 2\nfront\nback\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\nfront`
).split("\n");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  createNode(value, next) {
    return {
      value,
      next,
    };
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }

  size() {
    return this.size;
  }

  push(value) {
    const currentNode = this.createNode(value, null);
    if (this.head === null) {
      this.head = currentNode;
      this.head.next = null;
    } else {
      this.tail.next = currentNode;
    }
    this.tail = currentNode;
    this.size++;
  }
  pop() {
    if (this.empty() === 1) return -1;
    const node = this.head;
    this.head = this.head.next;
    this.size--;
    return node.value;
  }

  front() {
    return this.empty() === 1 ? -1 : this.head.value;
  }

  back() {
    return this.empty() === 1 ? -1 : this.tail.value;
  }
}
let N = +n;
let answer = "";
const queue = new Queue();
const iterator = inputs[Symbol.iterator]();

while (N--) {
  const [command, param] = iterator.next().value.split(" ");
  switch (command) {
    case "push":
      queue.push(param);
      break;
    case "pop":
      answer += `${queue.pop()}\n`;
      break;
    case "size":
      answer += `${queue.size}\n`;
      break;
    case "empty":
      answer += `${queue.empty()}\n`;
      break;
    case "front":
      answer += `${queue.front()}\n`;
      break;
    case "back":
      answer += `${queue.back()}\n`;
      break;
    default:
      break;
  }
}
console.log(answer);
