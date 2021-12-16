const [n, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : // : `5\n8\n17\n23\n14\n83`
      `3\n6\n36\n216`
).split("\n");

const N = +n;
const inputs = input.map((v) => +v);

const findDifferMaxMin = (arr, n) => {
  let D = [];
  for (let i = 1; i < n; i++) {
    D.push(Math.abs(arr[i] - arr[i - 1]));
  }
  let min = Math.min(...D);
  let max = Math.max(...D);
  delete D;
  return [max, min];
};

const Euclidean = (a, b) => {
  while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const findDivisor = (num) => {
    let result = ""
    for (let i = 2; i <= num; i++) {
        num % i === 0 ? result += `${i} ` : ""
    }
    return result
}

const main = () => {
  const [max, min] = findDifferMaxMin(inputs, N);
  const gcd = Euclidean(max, min);
  const result = findDivisor(gcd)
  console.log(result);
};
main();
/**
 * 1. a mod c , b mod c 를 만족하면 a ≡ b (mod c)이다
 * 2. 1의 식이 만족한다면 a-b는 c의 정수배이다
 * 3. a와 b의 공약수 r에 대해
 *    r | gcd(a,b)
 *    r의 집합과 gcd(a,b)의 약수의 집합은 같다.
 * 4. 입력은 M이 항상 하나 이상 존재한다.
 * 5. c를 찾는 문제이므로 정리 2와 정리 3을 사용한다
 * 6. 정리 2를 사용하여 입력 원소간의 차이의 절댓값을 배열 D에 저장한다
 * 7. 유클리드 호제법을 사용하여 D의 원소의 gcd(D.max,D.min)를 구한다
 * 8. 정리 3을 사용하여 gcd의 약수를 구하고 오름차순으로 출력한다.
 */
