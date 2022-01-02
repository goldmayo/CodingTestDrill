const [nk] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `7 3`
).split("\n");

const [N, K] = nk.split(" ").map((v) => +v);
const Deck = Array(N).fill(0);
let answer = [];

const solveJosephus = (n, k) => {
  let count = 1;
  let i = 0;
  let position = -1;

  while (count <= n) {
    while (true) {
      position = (position + 1) % n;
      if (Deck[position] === 0) {
        i++;
      }
      if (i === k) {
        answer.push(`${position + 1}`);
        i = 0;
        break;
      }
    }
    Deck[position] = count;
    count++;
  }
};
solveJosephus(N, K);
console.log(`<${answer.join(", ")}>`);
// {
//   class Queue {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.size = 0;
//     }
//     createNode(value, next) {
//       return {
//         value,
//         next,
//       };
//     }
//     empty() {
//       return this.size === 0 ? 1 : 0;
//     }
//     size() {
//       return this.size;
//     }
//     push(value) {
//       const currentNode = this.createNode(value, null);
//       if (this.head === null) {
//         this.head = currentNode;
//         this.head.next = null;
//         this.head.prev = null;
//       } else {
//         this.tail.next = currentNode;
//         this.tail.next.prev = this.tail;
//       }
//       this.tail = currentNode;
//       currentNode.next = this.head;
//       this.size++;
//     }
//     pop(x) {
//       if (this.empty() === 1) return -1;
//       let currentNode = this.head;
//       // this.head = this.head.next;
//       let count = this.size;
//       while (count--) {
//         if (+currentNode.value === x) {
//           console.log("find", x);
//           let currentPrevNode = currentNode.prev;
//           let currentNextNode = currentNode.next;
//           currentNextNode.prev = currentPrevNode;
//           currentPrevNode.next = currentNextNode;
//           this.size--;
//           return currentNode.value;
//         } else {
//           currentNode = currentNode.next;
//         }
//       }
//     }
//     front() {
//       return this.empty() === 1 ? -1 : this.head.value;
//     }
//     back() {
//       return this.empty() === 1 ? -1 : this.tail.value;
//     }
//     print() {
//       let count = this.size;
//       let result = "";
//       const head = this.head;
//       while (count--) {
//         const node = this.head;
//         this.head = this.head.next;
//         result += `${node.value} `;
//       }
//       this.head = head;
//       return result;
//     }
//   }
// }
