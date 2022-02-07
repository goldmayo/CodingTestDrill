/**
 * 두 점[P(x1,y1), Q(x2,y2)] 사이의 거리
 * 출력 : 두 점의 거리의 제곱
 * (x2-x1)^2 + (y2-y1)^2
 */
const [n, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `7\n-5 0\n-3 4\n2 1\n3 4\n-1 1\n8 8\1 7`
).split("\n");
// `3\n0 0\n2 0\n3 0`
// `4\n0 0\n10 10\n0 10\n10 0`
const N = +n;
let PQ = inputs.map((e) => e.split(" ").map(Number));

const calcDistance = (p, q) => {
  return Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
};
const sortBasedOnY = (arr) => {
  arr.sort((a, b) => a[1] - b[1]);
};
const sortBasedOnX = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
};
const bruteForce = (arr, left, right) => {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = left; i < right; i++) {
    for (let j = i + 1; j <= right; j++) {
      let temp = calcDistance(arr[i], arr[j]);
      result > temp ? (result = temp) : "";
    }
  }
  return result;
};
const findClosestDistance = (arr, left, right) => {
  if (right - left + 1 <= 3) {
    return bruteForce(arr, left, right);
  }
  let mid = Math.floor(left + right / 2);
  let DistanceL = findClosestDistance(arr, left, mid);
  let DistanceR = findClosestDistance(arr, mid + 1, right);

  let closestDistance = Math.min(DistanceL, DistanceR);
  let middleSection = [];

  for (let i = left; i <= right; i++) {
    let xDistance = arr[i][0] - arr[mid][0];
    Math.pow(xDistance, 2) < closestDistance ? middleSection.push(arr[i]) : "";
  }
  sortBasedOnY(middleSection);
  let len = middleSection.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      let yDistance = middleSection[j][1] - middleSection[i][1];
      if (Math.pow(yDistance, 2) < closestDistance) {
        let distance = calcDistance(middleSection[i], middleSection[j]);
        distance < closestDistance ? (closestDistance = distance) : "";
      } else {
        break;
      }
    }
  }
  return closestDistance;
};

const main = () => {
  sortBasedOnX(PQ);
  let result = findClosestDistance(PQ, 0, N - 1);
  console.log(result);
};
main();
