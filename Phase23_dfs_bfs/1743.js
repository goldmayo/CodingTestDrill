const [NMK, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3 4 5\n3 2\n2 2\n3 1\n2 3\n1 1`
).split("\n");

const [N, M, K] = NMK.split(" ").map(Number);
const trashCoordinates = inputs.map((rc) => rc.split(" ").map(Number));
const passage = Array.from({ length: N }, () => new Array(M).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let biggestTrash = 0;

function createTrashMap(coordinates) {
  let count = K;
  const iterator = coordinates[Symbol.iterator]();
  while (count--) {
    const [x, y] = iterator.next().value;
    passage[x - 1][y - 1] = 1;
  }
}

const checkBoundary = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < M ? true : false;
};

function findBiggestTrash() {
  const trashs = [];
  createTrashMap(trashCoordinates);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (passage[i][j] === 1) {
        DFS(i, j);
        trashs.push(biggestTrash);
        biggestTrash = 0;
      }
    }
  }
  return Math.max(...trashs);
}
const DFS = (x, y) => {
  if (checkBoundary(x, y) && passage[x][y] === 1) {
    console.log(x, y);
    passage[x][y] = 0;
    biggestTrash += 1;
    for (let i = 0; i < 4; i++) {
      DFS(x + dx[i], y + dy[i]);
    }
  }
};

console.log(findBiggestTrash());
