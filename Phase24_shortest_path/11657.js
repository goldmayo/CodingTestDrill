const { ifError } = require("assert");

const [nm, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3 4\n1 2 4\n1 3 3\n2 3 -1\n3 1 -2`
).split("\n");

const INF = Number.POSITIVE_INFINITY;
const [N, M] = nm.split(" ").map(Number);
const edges = inputs.map((edge) => edge.split(" ").map(Number));
const distance = Array(N + 1).fill(INF);

const bf = (start) => {
  distance[start] = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      currVertex = edges[j][0];
      nextVertex = edges[j][1];
      cost = edges[j][2];
      if (distance[currVertex] != INF && distance[nextVertex] > distance[currVertex] + cost) {
        distance[nextVertex] = distance[currVertex] + cost;
        if (i === N - 1) return true;
      }
    }
  }
  return false;
};
const solution = () => {
  let answer = "";
  const isNegativeCycle = bf(1);
  if (isNegativeCycle) {
    answer += `-1\n`;
  } else {
    for (let i = 2; i <= N; i++) {
      if (distance[i] === INF) {
        answer += `-1\n`;
      } else {
        answer += `${distance[i]}\n`;
      }
    }
  }
  console.log(answer);
};
solution();
