{
  const [N, M] = require("fs")
    .readFileSync("/dev/stdin", "utf-8")
    .toString()
    .trim()
    .split(" ")
    .map((a) => +a);

  let result = "";
  let arr = [];

  const backtrack = (k) => {
    if (k === M) {
      result += `${arr.join(" ")}\n`;
      return;
    }
    for (let i = 1; i <= N; i++) {
      arr.push(i);
      backtrack(k + 1);
      arr.pop();
    }
  };
  backtrack(0);
  console.log(result);
}
