const [mnh, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `2 2 2\n-1 -1\n1 -1\n0 -1\n-1 -1`
).split("\n");
// `4 2 1\n0 0 0 1\n0 0 0 0`
// `5 3 1\n0 0 0 0 0\n0 1 0 1 0\n0 0 0 0 0`
// `4 3 2\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n-1 -1 -1 -1\n0 1 1 -1`
// `5 3 2\n0 -1 0 0 0\n-1 -1 0 1 1\n0 0 0 1 1\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0`
// `5 5 2\n1 -1 1 -1 1\n0 0 -1 -1 1\n0 -1 -1 1 0\n0 -1 0 0 1\n0 0 1 -1 1\n1 -1 -1 -1 -1\n0 -1 0 1 1\n0 1 0 0 -1\n-1 -1 -1 -1 -1\n-1 0 0 1 -1`
// `5 3 1\n0 -1 0 0 0\n-1 -1 0 1 1\n0 0 0 1 1`
// `4 3 2\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n-1 -1 -1 -1\n1 1 1 -1`
// `5 3 3\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0`
// `5 3 2\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 1 0 0\n0 0 0 0 0`
const [M, N, H] = mnh.split(" ").map(Number);
const locationOfTomato = [];
let tomatoZeroFlag = false;
const days = Array.from(Array(N * H), () => new Array(M).fill(0));
const BOX = inputs.map((e, col) =>
  e.split(" ").map((v, row) => {
    if (+v === -1) days[col][row] = -1;
    if (+v === 1) {
      locationOfTomato.push([col, row]);
      days[col][row] = 1;
    }
    if (+v === 0) tomatoZeroFlag = true;
    return +v;
  })
);

let answer;

const checkBoundary = (y, x) => {
  return y >= 0 && y < N * H && x >= 0 && x < M ? true : false;
};
const getDirection = (y) => {
  switch (y % N) {
    case 0:
      return [
        [0, 1, 0, -N, N],
        [1, 0, -1, 0, 0],
      ];
    case N - 1:
      return [
        [-1, 0, 0, -N, N],
        [0, 1, -1, 0, 0],
      ];
    default:
      return [
        [-1, 0, 1, 0, -N, N],
        [0, 1, 0, -1, 0, 0],
      ];
  }
};
const BFS = (queue) => {
  let number = 0;
  while (number !== queue.length) {
    let [qy, qx] = [queue[number][0], queue[number][1]];
    const [dy, dx] = getDirection(qy);
    for (let i = 0; i < dy.length; i++) {
      let [ny, nx] = [qy + dy[i], qx + dx[i]];
      if (checkBoundary(ny, nx) && days[ny][nx] === 0 && BOX[ny][nx] === 0) {
        queue.push([ny, nx]);
        days[ny][nx] = days[qy][qx] + 1;
        answer = days[ny][nx];
      }
    }

    number++;
  }
  answer -= 1;
};

const solution = () => {
  BFS(locationOfTomato);
  if (!tomatoZeroFlag) {
    answer = 0;
  } else {
    for (const row of days) {
      if (row.includes(0)) {
        answer = -1;
        break;
      }
    }
  }
  console.log(answer);
};
solution();
