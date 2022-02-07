const inputStream = require("fs").readFileSync("/dev/stdin").toString().trim();
// const inputStream = "Mississipi";
// const inputStream = "Zza";

let alphabet = new Map();

function makeAlphabetMap() {
  for (let i = 0; i < 26; i++) {
    alphabet.set(String.fromCharCode(i + 65), 0);
  }
}

function findMaxNum(inputStr) {
  for (let i = 0; i < inputStr.length; i++) {
    let substr = inputStr[i];
    for (let key of alphabet.keys()) {
      if (key === substr) {
        alphabet.set(key, alphabet.get(key) + 1);
      }
    }
  }
  const maxNum = Math.max(...alphabet.values());
  return maxNum;
}

function findMaxKey(maxNumber) {
  let maxKey = [];
  for (let key of alphabet.keys()) {
    if (alphabet.get(key) === maxNumber) {
      maxKey.push(key);
    }
  }
  return maxKey;
}
function solution(inputStream) {
  let input = inputStream.toUpperCase();
  makeAlphabetMap();
  const maxNum = findMaxNum(input);
  const maxKey = findMaxKey(maxNum);
  return maxKey.length > 1 ? "?" : maxKey[0];
}
const result = solution(inputStream);
console.log(result);
