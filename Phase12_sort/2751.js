{
  const [N, ...input] = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim()
    .split("\n")
    .map((el) => +el);

  let data = input.sort((a, b) => a - b);
  console.log(data.join("\n"));
}
