const [n, inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `10\n4 32 128 1024 64 8 2 512 256 16`
).split("\n");

const N = +n;
const A = inputs.split(" ").map((v) => +v);
let result;
// console.log(N);
// console.log(A);

const main = () => {
  A.sort((a, b) => a - b);
  if (N % 2 === 0) {
    result = A[0] * A[N - 1];
  } else {
    let mid = A[Math.floor(N / 2)];
    result = mid * mid;
  }
  console.log(result);
};

main();
/**
 * 1과 자기 자신을 제외한 약수를 진약수
 * 8의 약수 1 2 4 8 중 진약수는 2 4
 * 4의 약수 1 2 4 중 진약수는 2
 * 24의 약수 1 2 3 4 6 8 12 24 중 진약수는 2 3 4 6 8 12
 * 36의 약수 1 2 3 4 6 9 12 18 36 중 진약수는 2 3 4 6 9 12 18
 *
 * 1. 요소 정렬 후
 *
 * 2-1. 진약수의 개수가 홀수인경우(제곱수)
 * 중간에 있는 요소를 제곱한다
 * 2-2. 진약수의 개수가 짝수인경우
 * 맨 처음 요소와 맨 마지막 요소를 곱한다
 * 3. 출력
 */
