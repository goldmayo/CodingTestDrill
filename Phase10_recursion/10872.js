{
  // print factorial N

  const input = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim();

  const N = parseInt(input);

  function factorial(N) {
    if (N === 0) return 1;
    if (N === 1) return 1;
    let temp = N * factorial(N - 1);
    return temp;
  }

  console.log(factorial(N));
}
