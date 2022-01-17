{
  const [first, ...inputs] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
      : `10 1001\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000`
  ).split("\n");
  // `10 4790\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000`

  let [N, K] = first.split(" ").map((n) => Number(n));

  const coins = inputs.map((n) => Number(n)).sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (coins[i] <= K) {
      console.log(coins[i]);
      answer += Math.floor(K / coins[i]);
      K %= coins[i];
    }
  }

  console.log(answer);
}
