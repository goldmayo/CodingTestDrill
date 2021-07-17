/**
 * 덩치 = (몸무게, 키);
 *
 * 덩치 대소 판별
 * A = (x,y) B = (p,q)
 * A가 더 크다 :  x > p, y > q (몸무게,키 둘 다 큰 경우에만 덩치가 더 크다고 정의한다)
 *
 * 집단에서의 덩치 순위
 * 나보다 덩치가 큰 사람의 수 : K
 * 나의 순위 : K+1
 */

const [A, ...input] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(A);
let arrWH = [];
let result = "";

for (let i = 0; i < N; i++) {
  let temp = input[i].split(" ").map((el) => +el);
  arrWH.push(temp);
}

for (let i = 0; i < N; i++) {
  let count = 0;
  let tempW = arrWH[i][0];
  let tempH = arrWH[i][1];
  for (let j = 0; j < N; j++) {
    if (arrWH[j][0] > tempW && arrWH[j][1] > tempH) {
      count++;
    }
  }
  result += `${count + 1} `;
}
console.log(result);
