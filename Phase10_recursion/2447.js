{
  //참고 : https://joooohee.tistory.com/56
  //i % 3 === 1 && j % 3 === 1
  //(i / 3) % 3 === 1 && (j / 3) % 3 === 1

  const input = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim();

  let N = parseInt(input);
  let result = "";

  function drawStars(i, j, N) {
    if (i % 3 === 1 && j % 3 === 1) {
      result += " ";
    } else {
      if (N === 1) {
        result += "*";
      } else {
        drawStars(Math.floor(i / 3), Math.floor(j / 3), Math.floor(N / 3));
      }
    }
  }

  function solution(N) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        drawStars(i, j, N);
      }
      result += "\n";
    }
    console.log(result);
  }

  solution(N);
}
