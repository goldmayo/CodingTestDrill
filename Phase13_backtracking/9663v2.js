const N = +require("fs").readFileSync("/dev/stdin", "utf8").toString().trim();

let isused_Col = Array(N + 1);
let isused_L_diagonal = Array(N + N);
let isused_R_diagonal = Array(N + N);
let count = 0;

function nQeens(i) {
  if (i === N) {
    count++;
    return;
  } else {
    for (let j = 0; j < N; j++) {
      if (
        isused_Col[j] ||
        isused_R_diagonal[j + i] ||
        isused_L_diagonal[i - j + N - 1]
      ) {
        continue;
      }
      isused_Col[j] = true;
      isused_R_diagonal[j + i] = true;
      isused_L_diagonal[i - j + N - 1] = true;
      nQeens(i + 1);
      isused_Col[j] = false;
      isused_R_diagonal[j + i] = false;
      isused_L_diagonal[i - j + N - 1] = false;
    }
  }
}

nQeens(0);
console.log(count);
