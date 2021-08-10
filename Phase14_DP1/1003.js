{
  const [T, ...input] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
      : `3\n0\n1\n3`
  ).split("\n");
  const N = input.map(Number);
  let result = [];
  let DP = Array.from(Array(41), () => new Array(2).fill(0));
  DP[0][0] = 1;
  DP[1][1] = 1;
  for (let i = 0; i < T; i++) {
    if (N[i] < 2) {
      N[i] === 0
        ? result.push(`${DP[0][0]} ${DP[0][1]}`)
        : result.push(`${DP[1][0]} ${DP[1][1]}`);
    } else {
      for (let j = 2; j <= N[i]; j++) {
        DP[j][0] = DP[j - 1][0] + DP[j - 2][0];
        DP[j][1] = DP[j - 1][1] + DP[j - 2][1];
        if (j === N[i]) result.push(`${DP[j][0]} ${DP[j][1]}`);
      }
    }
  }
  // console.table(DP);
  console.log(result.join("\n"));
}
