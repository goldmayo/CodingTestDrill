const d = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.split(" ").map((x) => +x));
const [M, N, H] = d.shift();
let stack = [];
let nextStack = [];

function isComplete() {
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (!d[i * N + j][k]) {
          return false;
        }
      }
    }
  }
  return true;
}
function ripen(i, j, k) {
  if (0 <= i && i < H && 0 <= j && j < N && 0 <= k && k < M) {
    if (d[i * N + j][k] === 0) {
      nextStack.push([i, j, k]);
      d[i * N + j][k] = 1;
    }
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (d[i * N + j][k] === 1) {
        nextStack.push([i, j, k, 0]);
      }
    }
  }
}

let ans = -1;
while (nextStack.length) {
  stack = nextStack;
  nextStack = [];

  while (stack.length) {
    const [i, j, k] = stack.pop();
    ripen(i + 1, j, k);
    ripen(i - 1, j, k);
    ripen(i, j + 1, k);
    ripen(i, j - 1, k);
    ripen(i, j, k + 1);
    ripen(i, j, k - 1);
  }
  ans++;
}

if (!isComplete()) {
  console.log(-1);
} else {
  console.log(ans);
}
