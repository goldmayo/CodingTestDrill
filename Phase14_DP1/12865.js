{
  /**
   * https://jeonyeohun.tistory.com/86
   * https://withhamit.tistory.com/481
   * https://dheldh77.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B0%EB%82%AD-%EB%AC%B8%EC%A0%9CKnapsack-Problem
   */
  const vw = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
      : `4 7\n6 13\n4 8\n3 6\n5 12`
  ).split("\n");

  const VW = vw.map((el) => el.split(" ").map((el) => +el));
  const V = [0];
  const W = [0];
  const N = VW[0][0];
  const K = VW[0][1];
  // console.log("N :", N);
  // console.log("K :", K);

  for (let i = 1; i < VW.length; i++) {
    V[i] = VW[i][1];
    W[i] = VW[i][0];
  }
  // console.log("VW :", VW);
  // console.log("V :", V);
  // console.log("W :", W);

  let DP = Array.from(Array(N + 1), () => Array(K + 1).fill(0));
  //d[i][j] = 물건을 i번째 까지 배낭에 넣는다고 가정했을 때, 무게 j를 초과하지 않으면서 배낭에 넣을 수 있는 물건들의 가격의 총합의 최대값
  //d[i][j] = d[i - 1][j] (j < w[i] 인 경우, i번째 물건을 못 넣는 경우, 변함 없으므로 d[i-1][j])
  //d[i][j] = max(d[i - 1][j], d[i - 1][j - w[i]] + v[i]); ( j >= w[i]인 경우, i번째 물건을 넣을 수 있는 경우)

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
      if (j < W[i]) {
        DP[i][j] = DP[i - 1][j];
      } else {
        DP[i][j] = Math.max(DP[i - 1][j], DP[i - 1][j - W[i]] + V[i]);
      }
    }
  }
  console.log(DP[N][K]);
}
