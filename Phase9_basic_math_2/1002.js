const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");
// let T = 3;
// let input = ["0 0 13 40 0 37", "0 0 3 0 7 4", "1 1 1 1 1 5"];

for (let i = 0; i < +T; i++) {
  let inputs = input[i].split(" ").map((e) => +e);
  //   console.log(inputs);
  let [x1, y1, r1, x2, y2, r2] = inputs;
  //   console.log(x1, y1, r1, x2, y2, r2);
  if (r1 > r2) {
    const temp = r1;
    r1 = r2;
    r2 = temp;
  }
  const rSum = r2 + r1;
  const rSub = r2 - r1;
  const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

  if (d === 0 && r1 === r2) {
    console.log(-1);
  } else if (rSub < d && d < rSum) {
    console.log(2);
  } else if (rSub === d || rSum === d) {
    console.log(1);
  } else if (rSum < d || d < rSub || d === 0) {
    console.log(0);
  }
}
