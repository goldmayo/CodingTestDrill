{
  const [T, ...Ns] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
      : `2\n6\n12`
  )
    .split("\n")
    .map(Number);

  let table = [0, 1, 1, 1, 2, 2];
  let result = [];

  function fillTable(num) {
    if (num > 3) {
      for (let i = 6; i <= num; i++) {
        table[i] = table[i - 1] + table[i - 5];
      }
    }
  }

  function solution() {
    for (const N of Ns) {
      fillTable(N);
      result.push(table[N]);
    }
    console.log(result.join("\n"));
  }
  solution();
}
