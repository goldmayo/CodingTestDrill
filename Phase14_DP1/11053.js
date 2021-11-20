{
  // O(n^2)
  const [n, a] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
      : `6\n10 20 10 30 20 50`
  ).split("\n");

  const N = +n;
  const A = a.split(" ").map((el) => +el);
  let DP = new Array(N);

  console.log(A);
  for (let i = 0; i < N; i++) {
    DP[i] = 1;
    for (let j = 0; j < i; j++) {
      console.log("----------------------------");
      console.log(`(i,j) = ${i},${j}`);
      console.log(`DP[${i}] : ${DP[i]}\nDP[${j}]+1 : ${DP[j] + 1}`);
      if (A[j] < A[i]) {
        console.log(true);
        DP[i] = Math.max(DP[i], DP[j] + 1);
      }
      console.log("DP :", DP);
    }
  }
  console.log(Math.max(...DP));
}
