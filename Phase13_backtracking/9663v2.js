{
  //https://www.youtube.com/watch?v=Enz2csssTCs&list=PLtqbFd2VIQv4O6D6l9HcD732hdrnYb6CY&index=13
  const N = +require("fs").readFileSync("/dev/stdin", "utf8").toString().trim();
  //(x,y)
  let isused_Col = Array(N + 1).fill(false); //y
  let isused_L_diagonal = Array(N + N).fill(false); //x+y
  let isused_R_diagonal = Array(N + N).fill(false); //x-y+n-1
  let count = 0;

  function nQeens(x) {
    if (x === N) {
      count++;
      return;
    } else {
      for (let y = 0; y < N; y++) {
        if (
          isused_Col[y] ||
          isused_R_diagonal[y + x] ||
          isused_L_diagonal[x - y + N - 1]
        ) {
          continue;
        }
        isused_Col[y] = true;
        isused_R_diagonal[y + x] = true;
        isused_L_diagonal[x - y + N - 1] = true;
        nQeens(x + 1);
        isused_Col[y] = false;
        isused_R_diagonal[y + x] = false;
        isused_L_diagonal[x - y + N - 1] = false;
      }
    }
  }

  nQeens(0);
  console.log(count);
}
