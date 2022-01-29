const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `7\n0110100\n0110101\n1110101\n0000111\n0100000\n0111110\n0111000`
).split("\n");
const N = +n;
const graph = inputs.map((e) => e.split("").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let homeCount = 0;

const checkBoundary = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < N ? true : false;
};

const DFS = (x, y) => {
  console.log("(x,y) :", x, y);
  if (checkBoundary(x, y) && graph[x][y] === 1) {
    console.log(true);
    graph[x][y] = 0;
    homeCount += 1;
    for (let i = 0; i < 4; i++) {
      DFS(x + dx[i], y + dy[i]);
    }
  }
};

const main = () => {
  const complex = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 1) {
        DFS(i, j);
        complex.push(homeCount);
        homeCount = 0;
      }
    }
  }
  complex.sort((a, b) => a - b);
  console.log(complex.length);
  console.log(complex.join("\n"));
};
main();
