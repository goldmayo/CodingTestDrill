{
  const [n, ...input] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
      : `3\n26 40 83\n49 60 57\n13 89 99`
  ).split("\n");
  const N = +n;
  const RGB = input.slice().map((rgb) => rgb.split(" ").map(Number));
  let dpTable = Array.from(Array(N), () => Array(3).fill(0));

  function solution() {
    dpTable[0] = RGB[0];
    for (let i = 1; i < N; i++) {
      dpTable[i][0] =
        Math.min(dpTable[i - 1][1], dpTable[i - 1][2]) + RGB[i][0];
      dpTable[i][1] =
        Math.min(dpTable[i - 1][0], dpTable[i - 1][2]) + RGB[i][1];
      dpTable[i][2] =
        Math.min(dpTable[i - 1][0], dpTable[i - 1][1]) + RGB[i][2];
    }
    let result = Math.min(...dpTable[N - 1]);
    console.log(result);
  }
  solution();
}
