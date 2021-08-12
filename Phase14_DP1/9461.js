{
  const [T, ...Ns] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
      : `2\n6\n12`
  )
    .split("\n")
    .map(Number);

  let table = Array(101).fill(0);
  let result = [0, 1, 1, 1];
  function fillTable(num) {
    if (num > 3) {
      for (let i = 4; i <= num; i++) {
        table[i] = table[i - 2] + table[i - 3];
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
