/**
 * 1 input 반갈죽
 * 2 input = pA + pB;
 * 3 input pA && pB === isPrime ? log : pA-=1, pB+=1
 * 4 3반복
 */
// const T = 3;
// let inputs = [8, 10, 16];
const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let inputs = input.map((el) => +el);
let result = "";

const isPrime = (n) => {
  const sqrtN = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

for (let evenNum of inputs) {
  let pA = evenNum / 2;
  let pB = evenNum / 2;
  while (true) {
    if (isPrime(pA) && isPrime(pB)) {
      result += `${pA} ${pB}\n`;
      break;
    } else {
      pA--;
      pB++;
    }
  }
}
console.log(result);
