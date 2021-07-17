{
  const input = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim();
  let N = parseInt(input);
  let generator = 0;
  for (let i = 1; i < N; i++) {
    let splits = i.toString().split("");
    let sumSplits =
      splits.map((el) => +el).reduce((acc, curr) => acc + curr) + i;
    if (sumSplits === N) {
      generator = i;
      break;
    }
  }
  console.log(generator);
}
