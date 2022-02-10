const [input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 17`
).split("\n");
const [N, K] = input.split(" ").map(Number);
const MIN = 0;
const MAX = 100000;

const solution = (start, target) => {
  const visit = Array(MAX + 1).fill(false);
  let queue = [[start, 0]];
  visit[start] = true;
  while (queue.length) {
    let [cur, time] = queue.shift();
    visit[cur] = true;
    if (cur === target) return time;
    for (let next of [cur * 2, cur + 1, cur - 1]) {
      if (next < MIN || next > MAX || visit[next]) continue;
      visit[next] = true;
      if (next === cur * 2) {
        queue.unshift([next, time]);
      } else {
        queue.push([next, time + 1]);
      }
    }
  }
};

const ans = solution(N, K);
console.log(ans);
