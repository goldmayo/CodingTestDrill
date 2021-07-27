{
  const [N, M] = require("fs")
    .readFileSync("/dev/stdin", "utf-8")
    .toString()
    .trim()
    .split(" ")
    .map((a) => +a);

  let result = "";
  let arr = [];
  let state = Array(9).fill(false);

  const backtrack = (k) => {
    if (k === M) {
      result += `${arr.join(" ")}\n`;
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!state[i]) {
        arr.push(i);
        state[i] = true;
        backtrack(k + 1);
        arr.pop();
        state[i] = false;
      }
    }
  };
  backtrack(0);
  console.log(result);
}
