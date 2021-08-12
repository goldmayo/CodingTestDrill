{
  const input = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
      : `4`
  ).split("\n");
  const N = +input;
  let table = Array(N + 1).fill(0);

  function fillTable(num) {
    table[1] = 1;
    table[2] = 2;
    if (num > 2) {
      for (let i = 3; i <= N; i++) {
        table[i] = (table[i - 1] + table[i - 2]) % 15746;
      }
    }
  }
  fillTable(N);
  console.log(table[N]);
}
