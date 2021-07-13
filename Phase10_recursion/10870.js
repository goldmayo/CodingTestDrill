{
  // Fibonacci

  const input = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim();

  const N = parseInt(input);

  //   function fibonacci(N) {
  //     if (n === 0) return 0;
  //     else if (n === 1) return 1;
  //     else return fibonacci(N - 2) + fibonacci(N - 1);
  //   }
  //   console.log(fibonacci(N));

  let fiboNumber = [];

  function fiboMemoization(N) {
    if (N === 0) return 0;
    if (N === 1) return 1;
    if (fiboNumber[N] >= 0) {
      return fiboNumber[N];
    } else {
      return (fiboNumber[N] = fiboMemoization(N - 2) + fiboMemoization(N - 1));
    }
  }
  console.log(fiboMemoization(N));
}
