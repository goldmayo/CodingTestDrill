const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : //  `15\npush_back 1\npush_front 2\nfront\nback\nsize\nempty\npop_front\npop_back\npop_front\nsize\nempty\npop_back\npush_front 3\nempty\nfront`
      `22\nfront\nback\npop_front\npop_back\npush_front 1\nfront\npop_back\npush_back 2\nback\npop_front\npush_front 10\npush_front 333\nfront\nback\npop_back\npop_back\npush_back 20\npush_back 1234\nfront\nback\npop_back\npop_back`
).split("\n");

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

class Deck {
  top;
  bottom;
  len;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.len = 0;
  }
  push_front(x) {
    const _newNode = new node(x);
    if (this.len === 0) {
      this.bottom = _newNode;
    } else if (this.len === 1) {
      _newNode.next = this.top;
      this.bottom.prev = _newNode;
    } else {
      _newNode.next = this.top;
      this.top.prev = _newNode;
    }
    this.top = _newNode;
    this.len++;
  }
  push_back(x) {
    const _newNode = new node(x);
    if (this.len === 0) {
      this.top = _newNode;
    } else if (this.len === 1) {
      _newNode.prev = this.top;
      this.top.next = _newNode;
    } else {
      _newNode.prev = this.bottom;
      this.bottom.next = _newNode;
    }
    this.bottom = _newNode;
    this.len++;
  }
  pop_front() {
    let value;
    if (this.len === 0) {
      return -1;
    } else if (this.len === 1) {
      value = this.top.value;
      this.top = null;
      this.bottom = null;
    } else {
      value = this.top.value;
      this.top = this.top.next;
    }
    this.len--;
    return value;
  }
  pop_back() {
    let value;
    if (this.len === 0) {
      return -1;
    } else if (this.len === 1) {
      value = this.bottom.value;
      this.top = null;
      this.bottom = null;
    } else {
      value = this.bottom.value;
      this.bottom = this.bottom.prev;
    }
    this.len--;
    return value;
  }
  size() {
    return this.len;
  }
  empty() {
    return this.len === 0 ? 1 : 0;
  }
  front() {
    return this.len === 0 ? -1 : this.top.value;
  }
  back() {
    return this.len === 0 ? -1 : this.bottom.value;
  }
}

const N = +n;
const iterator = inputs[Symbol.iterator]();
const deck = new Deck();
let answer = "";

let count = N;
while (count--) {
  const [command, param] = iterator.next().value.split(" ");
  switch (command) {
    case "push_front":
      deck.push_front(parseInt(param));
      break;
    case "push_back":
      deck.push_back(parseInt(param));
      break;
    case "pop_front":
      answer += `${deck.pop_front()}\n`;
      break;
    case "pop_back":
      answer += `${deck.pop_back()}\n`;
      break;
    case "size":
      answer += `${deck.size()}\n`;
      break;
    case "empty":
      answer += `${deck.empty()}\n`;
      break;
    case "front":
      answer += `${deck.front()}\n`;
      break;
    case "back":
      answer += `${deck.back()}\n`;
      break;
    default:
      break;
  }
}
console.log(answer);
// {
//   const [n, ...inputs] = (
//     process.platform === "linux"
//       ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
//       : `15\npush_back 1\npush_front 2\nfront\nback\nsize\nempty\npop_front\npop_back\npop_front\nsize\nempty\npop_back\npush_front 3\nempty\nfront`
//   ).split("\n");

//   class Deck {
//     constructor() {
//       this.top = null;
//       this.bottom = null;
//       this.size = 0;
//     }
//     createNode(value, next, prev) {
//       return {
//         value,
//         next,
//         prev,
//       };
//     }
//     push_front(x) {
//       const newNode = this.createNode(x, null, null);
//       if (this.empty() === 1) {
//         this.top = newNode;
//         this.top.next = null;
//         this.top.prev = null;
//         this.bottom = newNode;
//         this.bottom.prev = null;
//         this.bottom.next = null;
//       } else {
//         this.top.prev = newNode;
//         const tmpNode = this.top;
//         this.top = newNode;
//         this.top.next = tmpNode;
//       }
//       this.size++;
//     }
//     push_back(x) {
//       const newNode = this.createNode(x, null, null);
//       if (this.empty() === 1) {
//         this.top = newNode;
//         this.top.next = null;
//         this.top.prev = null;
//         this.bottom = newNode;
//         this.bottom.prev = null;
//         this.bottom.next = null;
//       } else {
//         this.bottom.next = newNode;
//         const tmpNode = this.bottom;
//         this.bottom = newNode;
//         this.bottom.prev = tmpNode;
//       }
//       this.size++;
//     }
//     pop_front() {
//       if (this.empty() === 1) return -1;
//       const firstNode = this.top;
//       this.top = this.top.next;
//       if (this.top !== null) {
//         this.top.prev = null;
//       }
//       this.size--;
//       return firstNode.value;
//     }
//     pop_back() {
//       if (this.empty() === 1) return -1;
//       const endNode = this.bottom;
//       this.bottom = this.bottom.prev;
//       if (this.bottom !== null) {
//         this.bottom.next = null;
//       }
//       this.size--;
//       return endNode.value;
//     }
//     get_size() {
//       return this.size;
//     }
//     empty() {
//       return this.size === 0 ? 1 : 0;
//     }
//     front() {
//       return this.empty() === 1 ? -1 : this.top.value;
//     }
//     back() {
//       return this.empty() === 1 ? -1 : this.bottom.value;
//     }
//     print() {
//       let count = this.size;
//       let result = "";
//       const top = this.top;
//       while (count--) {
//         const node = this.top;
//         this.top = this.top.next;
//         result += `${node.value} `;
//       }
//       this.top = top;
//       return result;
//     }
//   }

//   const N = +n;
//   const iterator = inputs[Symbol.iterator]();
//   const deck = new Deck();
//   let answer = "";

//   let count = N;
//   while (count--) {
//     const [command, param] = iterator.next().value.split(" ");
//     switch (command) {
//       case "push_front":
//         deck.push_front(parseInt(param));
//         break;
//       case "push_back":
//         deck.push_back(parseInt(param));
//         break;
//       case "pop_front":
//         answer += `${deck.pop_front()}\n`;
//         break;
//       case "pop_back":
//         answer += `${deck.pop_back()}\n`;
//         break;
//       case "size":
//         answer += `${deck.get_size()}\n`;
//         break;
//       case "empty":
//         answer += `${deck.empty()}\n`;
//         break;
//       case "front":
//         answer += `${deck.front()}\n`;
//         break;
//       case "back":
//         answer += `${deck.back()}\n`;
//         break;
//       default:
//         break;
//     }
//   }
//   console.log(answer);
// }
