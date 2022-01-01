const n = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `6`
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
  print() {
    let count = this.size;
    let result = "";
    const head = this.head;
    while (count--) {
      const node = this.head;
      this.head = this.head.next;
      result += `${node.value} `;
    }
    this.head = head;
    return result;
  }
}

const N = +n;
const makeDeck = (size) => {
  let idx = 1;
  let Deck = new Queue();
  while (size !== idx) {
    Deck.push(idx);
    idx++;
  }
  return Deck;
};
const sendToGraveYard = (queue) => {
  queue.pop();
};

const placeToBottom = (queue) => {
  queue.push(queue.pop());
};

const main = () => {
  let count = N;
  const Deck = makeDeck(N + 1);
  while (count !== 1) {
    sendToGraveYard(Deck);
    placeToBottom(Deck);
    count--;
  }
  console.log(Deck.print());
};
main();
