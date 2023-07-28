const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5\nRRRBB\nGGBBB\nBBBRR\nBBRRR\nRRRRR`
).split("\n");
// R=0 G=1 B=2
const N = Number(n);
const painting = inputs.map((e) => e.split(""));
const RGColorWeaknessPainting = JSON.parse(JSON.stringify(painting));
const paintingMap = Array.from({ length: N }, () => new Array(N).fill(false));
const RGColorWeaknessPaintingMap = Array.from({ length: N }, () => new Array(N).fill(false));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function checkBoundary(x, y) {
  return x >= 0 && x < N && y >= 0 && y < N ? true : false;
}
function createRGColorWeaknessPaintingMap() {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (painting[y][x] !== "B") {
        RGColorWeaknessPainting[y][x] = "R";
      }
    }
  }
}

function dfs(x, y, painting, map, flag) {
  if (checkBoundary(x, y) && painting[y][x] === flag && !map[y][x]) {
    map[y][x] = true;
    for (let i = 0; i < 4; i++) {
      dfs(x + dx[i], y + dy[i], painting, map, flag);
    }
  }
}

function countArea() {
  let countPaintingArea = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!paintingMap[y][x]) {
        dfs(x, y, painting, paintingMap, "R");
        dfs(x, y, painting, paintingMap, "G");
        dfs(x, y, painting, paintingMap, "B");
        countPaintingArea += 1;
      }
    }
  }
  return countPaintingArea;
}
function countAreaForRGColorWeakness() {
  let countPaintingArea = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!RGColorWeaknessPaintingMap[y][x]) {
        dfs(x, y, RGColorWeaknessPainting, RGColorWeaknessPaintingMap, "R");
        dfs(x, y, RGColorWeaknessPainting, RGColorWeaknessPaintingMap, "B");
        countPaintingArea += 1;
      }
    }
  }
  return countPaintingArea;
}
function solution() {
  createRGColorWeaknessPaintingMap();
  return `${countArea()} ${countAreaForRGColorWeakness()}`;
}
console.log(solution());
