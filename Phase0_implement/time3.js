const [n] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `1`
).split("\n");

const N = +n;
let count = 0;
for (let i = 0; i < N + 1; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      if ((i.toString() + j.toString() + k.toString()).includes("3")) {
        count++;
      }
    }
  }
}
console.log(count);
