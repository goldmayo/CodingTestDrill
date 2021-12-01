const [nk, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `10 4790\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000`
).split("\n");

const NK = nk.split(" ").map((el) => +el);
const N = NK[0]; // 동전의수
const K = NK[1]; // 만들어야할금액
const A = input.map((el) => +el); //동전
let cnt = 0;

const findBigCoin = (value) => {
  if (value > A[N - 1]) return A[N - 1];
  for (let i = 0; i < N; i++) {
    if (value < A[i]) {
      if (i !== 0) {
        return A[i - 1];
      } else {
        return A[i];
      }
    }
  }
};
const main = () => {
  cost = K;
  while (cost !== 0) {
    let properCoin = findBigCoin(cost);
    cnt = cnt + parseInt(cost / properCoin);
    cost = cost % properCoin;
  }
  console.log(cnt);
};
main();

// {
//   let [first, ...coins] = require("fs")
//     .readFileSync("/dev/stdin")
//     .toString()
//     .trim()
//     .split("\n");

//   let [N, K] = first.split(" ").map((n) => Number(n));

//   coins = coins.map((n) => Number(n)).sort((a, b) => b - a);

//   let answer = 0;
//   for (let i = 0; i < N; i++) {
//     answer += Math.floor(K / coins[i]);
//     K %= coins[i];
//   }

//   console.log(answer);
// }
