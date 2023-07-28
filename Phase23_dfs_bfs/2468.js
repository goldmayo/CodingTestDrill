/**
 * 첫째 줄에는 어떤 지역을 나타내는 2차원 배열의 행과 열의 개수를 나타내는 수 N이 입력된다. N은 2 이상 100 이하의 정수이다.
 *  둘째 줄부터 N개의 각 줄에는 2차원 배열의 첫 번째 행부터 N번째 행까지 순서대로 한 행씩 높이 정보가 입력된다.
 *  각 줄에는 각 행의 첫 번째 열부터 N번째 열까지 N개의 높이 정보를 나타내는 자연수가 빈 칸을 사이에 두고 입력된다. 높이는 1이상 100 이하의 정수이다.
 */
const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5\n9 9 9 9 9\n9 9 9 9 9\n9 9 9 9 9\n9 9 9 9 9\n8 9 9 9 9`
)
  // `7\n9 9 9 9 9 9 9\n9 2 1 2 1 2 9\n9 1 8 7 8 1 9\n9 2 7 9 7 2 9\n9 1 8 7 8 1 9\n9 2 1 2 1 2 9\n9 9 9 9 9 9 9`
  .split("\n");
// `5\n6 8 2 6 2\n3 2 3 4 6\n6 7 3 3 2\n7 2 5 3 6\n8 9 5 2 7`
const N = Number(n);
const Map = inputs.map((e) => e.split(" ").map(Number));
let floodMap = Array.from({ length: N }, () => new Array(N).fill(false));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function checkBoundary(x, y) {
  return x >= 0 && x < N && y >= 0 && y < N ? true : false;
}
function resetFloodMap() {
  floodMap = Array.from({ length: N }, () => new Array(N).fill(false));
}
function makeFlood(precipitation) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (Map[y][x] <= precipitation) {
        floodMap[y][x] = true;
      }
    }
  }
}
function dfs(x, y) {
  if (checkBoundary(x, y) && !floodMap[y][x]) {
    floodMap[y][x] = true;
    for (let i = 0; i < 4; i++) {
      dfs(x + dx[i], y + dy[i]);
    }
  }
}
function findSafeZone() {
  let safeZoneCounter = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!floodMap[y][x]) {
        dfs(x, y);
        safeZoneCounter += 1;
      }
    }
  }
  return safeZoneCounter;
}
function getMaxHighLandNumber(map) {
  let largestNumber = map[0][0];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] > largestNumber) {
        largestNumber = map[i][j];
      }
    }
  }

  return largestNumber;
}

function solution(map) {
  const numberOfSafeZone = [];
  for (let precipitation = 0; precipitation < getMaxHighLandNumber(map); precipitation++) {
    makeFlood(precipitation);
    numberOfSafeZone.push(findSafeZone());
    resetFloodMap();
  }
  return Math.max(...numberOfSafeZone);
}

console.log(solution(Map));
