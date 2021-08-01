{
  const N = +require("fs").readFileSync("/dev/stdin", "utf8").toString().trim();

  let col = Array(N + 1);
  let count = 0;

  function promissing(i) {
    let flag = true;
    let k = 1;

    while (k < i && flag) {
      if (col[i] === col[k] || Math.abs(col[i] - col[k]) === Math.abs(i - k)) {
        flag = false;
      }
      k++;
    }
    return flag;
  }

  function nQeens(i) {
    if (promissing(i)) {
      if (i === N) {
        count++;
      } else {
        for (let j = 1; j <= N; j++) {
          col[i + 1] = j;
          nQeens(i + 1);
        }
      }
    }
  }

  nQeens(0);
  console.log(count);
}
