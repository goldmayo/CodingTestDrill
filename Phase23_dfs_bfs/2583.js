const [MNK, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 7 3\n0 2 4 4\n1 1 2 5\n4 0 6 2`
).split("\n");

const [M, N, K] = MNK.split(" ").map(Number);
const rectangleCoordinates = inputs.map((e) => e.split(" ").map(Number));
const area = Array.from({ length: M }, () => new Array(N).fill(false));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let restArea = 0;

const checkBoundary = (x, y) => {
  return x >= 0 && x < M && y >= 0 && y < N ? true : false;
};

function drawRectangle(coordinates) {
  const [lbx, lby, rtx, rty] = coordinates;
  for (let y = M - rty; y < M - lby; y++) {
    for (let x = lbx; x < rtx; x++) {
      area[y][x] = true;
    }
  }
}

function createArea(coordinates) {
  let count = K;
  const iterator = coordinates[Symbol.iterator]();
  while (count--) {
    const rectCoordinate = iterator.next().value;
    drawRectangle(rectCoordinate);
  }
  //   console.log(area.map((e) => e.join(" ")));
}

const DFS = (x, y) => {
  if (checkBoundary(x, y) && !area[x][y]) {
    area[x][y] = true;
    restArea += 1;
    for (let i = 0; i < 4; i++) {
      DFS(x + dx[i], y + dy[i]);
    }
  }
};

function findrestArea() {
  const ans = [];
  createArea(rectangleCoordinates);
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!area[i][j]) {
        DFS(i, j);
        ans.push(restArea);
        restArea = 0;
      }
    }
  }
  return `${ans.length}\n${ans.sort((a, b) => a - b).join(" ")}`;
}

console.log(findrestArea());
