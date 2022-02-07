const [T, ...stream] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let words = stream;
// let words = ["abbbbbba", "abaccccccccc", "abccctcccffff", "aaaaaj"];

function isGroupWords(set, input) {
  for (let el of set.values()) {
    while (input !== "") {
      if (input[0] === el) {
        input = input.substring(1);
      } else {
        break;
      }
    }
  }
  return input === "" ? true : false;
}

function solution(words) {
  let count = 0;
  for (let word of words) {
    let setInput = new Set(word);
    if (isGroupWords(setInput, word)) {
      count++;
    }
    setInput.clear;
  }
  return count;
}

console.log(solution(words));
