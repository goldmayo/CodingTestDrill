/**
 *  R은 배열에 있는 숫자의 순서를 뒤집는 함수
 *  D는 첫 번째 숫자를 버리는 함수(배열이 비어있는데 D를 사용한 경우에는 에러가 발생)
 *  함수는 조합해서 한 번에 사용할 수 있다
 *  예를 들어,
 *  "AB"는 A를 수행한 다음에 바로 이어서 B를 수행하는 함수이다.
 *  RDD"는 배열을 뒤집은 다음 처음 두 숫자를 버리는 함수이다.
 *  배열의 초기값과 수행할 함수가 주어졌을 때, 최종 결과를 구하는 프로그램을 작성하시오.
 */

const [t, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `7\nRDD\n4\n[1,2,3,4]\nDD\n1\n[42]\nRRD\n6\n[1,1,2,3,5,8]\nD\n0\n[]\nR\n0\n[]\nDD\n3\n[1,2,3]\nD\n1\n[1]`
).split("\n");
//Array 기반 : 시간 초과
{
  const T = +t;
  const iterator = inputs[Symbol.iterator]();
  let count = T;
  let answer = "";
  while (count--) {
    let commandList = iterator.next().value;
    let lengthOfArr = +iterator.next().value;
    let tempArr = iterator.next().value;
    let arr =
      tempArr !== "[]"
        ? tempArr.substring(1, tempArr.length - 1).split(",")
        : [];
    let commandIterator = commandList[Symbol.iterator]();
    let commandCount = commandList.length;
    let rCount = 0;
    let errorFlag = 0;
    while (commandCount--) {
      let command = commandIterator.next().value;
      if (command === "R") {
        rCount++;
      } else {
        if (arr.length === 0) {
          errorFlag = 1;
          break;
        }
        rCount % 2 === 0 ? arr.shift() : arr.pop();
      }
    }
    if (errorFlag === 1) {
      answer += "error\n";
    } else {
      rCount % 2 === 0
        ? (answer += `[${arr.join(",")}]\n`)
        : (answer += `[${arr.reverse().join(",")}]\n`);
    }
  }

  console.log(answer);
}

//linked list 기반 시간초과
{
  //   class node {
  //     value;
  //     next;
  //     prev;
  //     constructor(val) {
  //       this.value = val;
  //       this.next = null;
  //       this.prev = null;
  //     }
  //   }
  //   class doublyQueue {
  //     length;
  //     head;
  //     tail;
  //     constructor() {
  //       this.length = 0;
  //       this.head = null;
  //       this.tail = null;
  //     }
  //     push(x) {
  //       const _newNode = new node(x);
  //       if (this.length === 0) {
  //         this.head = _newNode;
  //         this.tail = _newNode;
  //       } else {
  //         _newNode.prev = this.tail;
  //         this.tail.next = _newNode;
  //         this.tail = _newNode;
  //       }
  //       this.length++;
  //     }
  //     pop() {
  //       let value;
  //       if (this.len === 0) {
  //         return -1;
  //       } else if (this.len === 1) {
  //         value = this.head.value;
  //         this.head = null;
  //         this.tail = null;
  //       } else {
  //         value = this.head.value;
  //         this.head = this.head.next;
  //       }
  //       this.length--;
  //       return value;
  //     }
  //     reverse() {
  //       let count = this.length - 1;
  //       this.tail.prev = this.head;
  //       while (count--) {
  //         const head = this.head;
  //         this.head = this.head.next;
  //         if (this.tail.next !== null) {
  //           const temp = this.tail.next;
  //           head.next = temp;
  //           temp.prev = head;
  //           this.tail.next = head;
  //         } else {
  //           this.tail.next = head;
  //         }
  //         head.prev = this.tail;
  //       }
  //       this.tail = this.head.prev;
  //       this.tail.next = null;
  //       this.head.prev = null;
  //     }
  //     print() {
  //       let count = this.length;
  //       let result = [];
  //       const head = this.head;
  //       while (count--) {
  //         const node = this.head;
  //         this.head = this.head.next;
  //         result.push(`${node.value}`);
  //       }
  //       this.head = head;
  //       return result;
  //     }
  //     clean() {
  //       this.head = null;
  //       this.tail = null;
  //       this.length = 0;
  //     }
  //   }
  //   let queue = new doublyQueue();
  //   let answer = "";
  //   const T = +t;
  //   const iterator = inputs[Symbol.iterator]();
  //   let count = T;
  //   while (count--) {
  //     let commandList = iterator.next().value;
  //     let lengthOfArr = +iterator.next().value;
  //     let tempArr = iterator.next().value;
  //     let arr = tempArr.substring(1, tempArr.length - 1).split(",");
  //     arr.forEach((e) => {
  //       e !== "" ? queue.push(e) : "";
  //     });
  //     let commandCount = commandList.length;
  //     let commandIterator = commandList[Symbol.iterator]();
  //     while (commandCount--) {
  //       let command = commandIterator.next().value;
  //       switch (command) {
  //         case "R":
  //           queue.length !== 0 ? queue.reverse() : (answer += "[]\n");
  //           break;
  //         case "D":
  //           queue.length !== 0 ? queue.pop() : (answer += "error\n");
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //     queue.length !== 0 ? (answer += `[${queue.print().join(",")}]\n`) : "";
  //     queue.clean();
  //   }
  //   console.log(answer);
}
