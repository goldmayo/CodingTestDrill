{
  const [TW, ...inputs] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
      : `7 2\n2\n1\n1\n2\n2\n1\n1`
  ).split("\n");

  const [T, W] = TW.split(" ").map((el) => +el);
  const input = inputs.map((el) => +el);
  // 초기화
  let DP = Array.from(Array(T + 1), () =>
    Array.from(Array(2), () => Array(W + 1).fill(-1))
  );
  // 상태값 : T 시간, W 카운트 , idx 내 위치
  // 2의 30승 > 너무 크다 완전 탐색 불가 DP

  function move(idx, tree, cnt) {
    // console.log(`idx : ${idx}\ntree : ${tree}\ncnt : ${cnt}`);
    // 기저사례
    if (cnt < 0) return Number.MIN_SAFE_INTEGER;
    if (idx === T) return cnt === 0 ? 0 : Number.MIN_SAFE_INTEGER;
    // 메모이제이션
    if (DP[idx][tree][cnt] !== -1) {
      // console.log(`memo : ${DP[idx][tree][cnt]}`);
      return DP[idx][tree][cnt];
    }
    // 로직
    DP[idx][tree][cnt] =
      Math.max(
        move(idx + 1, tree === 0 ? 1 : 0, cnt - 1),
        move(idx + 1, tree, cnt)
      ) + (tree === input[idx] - 1 ? 1 : 0);

    // console.log(tree === input[idx] - 1 ? 1 : 0);
    // console.log(DP[idx][tree][cnt]);
    // console.log(DP);
    return DP[idx][tree][cnt];
  }
  function main() {
    // console.log(`T : ${T}\nW : ${W}\ninput : ${input}\nDP : ${DP}`);
    console.log(Math.max(move(0, 1, W - 1), move(0, 0, W)));
  }
  main();
}
