{
  const [A, B] = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim()
    .split("\n");
  let [N, M] = A.split(" ").map((e) => +e);
  let cards = B.split(" ").map((e) => +e);
  //   const N = 10;
  //   const M = 500;
  //   const cards = [93, 181, 245, 214, 315, 36, 185, 138, 216, 295];
  let MAX = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        if (sum > MAX && sum <= M) {
          MAX = sum;
        }
      }
    }
  }
  console.log(MAX);
}
