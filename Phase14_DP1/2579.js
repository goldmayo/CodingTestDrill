const [S, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `6\n10\n20\n15\n25\n10\n20`
).split("\n");

const Step = +S;
const Stair = inputs.map((e) => +e);
DP = Array.from(new Array(Step));
DP[0] = Stair[0];
DP[1] = Stair[0] + Stair[1];
DP[2] = Stair[2] + Math.max(Stair[0], Stair[1]);

for (let i = 3; i < Step; i++) {
  DP[i] = Math.max(DP[i - 3] + Stair[i - 1] + Stair[i], DP[i - 2] + Stair[i]);
}
console.log(DP[Step - 1]);
