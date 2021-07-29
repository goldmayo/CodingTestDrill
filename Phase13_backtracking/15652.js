{
  const [N, M] = require("fs")
    .readFileSync("/dev/stdin", "utf-8")
    .toString()
    .trim()
    .split(" ")
    .map((a) => +a);

  let result = "";
  let arr = [];

  const backtrack = (k, j) => {
    if (k === M) {
      result += `${arr.join(" ")}\n`;
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (i >= j) {
        arr.push(i);
        backtrack(k + 1, i);
        arr.pop();
      }
    }
  };
  backtrack(0, 0);
  console.log(result);
}
