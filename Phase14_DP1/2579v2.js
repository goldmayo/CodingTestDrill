// Top-Down

const [S, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `6\n10\n20\n15\n25\n10\n20`
).split("\n");

const Step = +S;
const Stair = inputs.map((e) => +e);

let DP = Array.from(Array(Step), () => Array.from(Array(2).fill(-1)));

function up(N, BN) {}
