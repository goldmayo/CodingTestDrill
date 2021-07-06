const [...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");
// console.log(input);
const dial = new Map();
// const input = "UNUCIC";
function makeDial() {
  dial.set("ABC", 2);
  dial.set("DEF", 3);
  dial.set("GHI", 4);
  dial.set("JKL", 5);
  dial.set("MNO", 6);
  dial.set("PQRS", 7);
  dial.set("TUV", 8);
  dial.set("WXYZ", 9);
}
function makeDialNumber(input) {
  let dialNum = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "0" || input[i] === "1") {
      if (input[i] === "1") {
        dialNum.push(1);
      } else {
        dialNum.push(10);
      }
    } else {
      for (let key of dial.keys()) {
        if (key.includes(input[i])) {
          dialNum.push(dial.get(key));
          break;
        }
      }
    }
  }
  return dialNum;
}
const reducer = (acc, curr) => acc + curr;
function solution(input) {
  makeDial();
  let temp = makeDialNumber(input);
  const result = temp.map((el) => el + 1).reduce(reducer);
  return result;
}
console.log(solution(input));
