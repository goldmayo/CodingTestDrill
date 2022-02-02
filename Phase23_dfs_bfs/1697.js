const nm = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 17`
).split("\n");

const [N, K] = nm[0].split(" ").map(Number);
const visited = Array(100001).fill(false);

const BFS = (position, target) => {
  let queue = [[position, 0]];
  let index = 0;
  while (index !== queue.length) {
    const [pos, time] = queue[index++];
    if (pos === target) {
      console.log(time);
      return;
    }
    if (pos * 2 <= 100000 && !visited[pos * 2]) {
      visited[pos * 2] = true;
      queue.push([pos * 2, time + 1]);
    }
    if (pos + 1 <= 100000 && !visited[pos + 1]) {
      visited[pos + 1] = true;
      queue.push([pos + 1, time + 1]);
    }
    if (pos - 1 >= 0 && !visited[pos - 1]) {
      visited[pos - 1] = true;
      queue.push([pos - 1, time + 1]);
    }
  }
};

const solution = () => {
  BFS(N, K);
};
solution();
