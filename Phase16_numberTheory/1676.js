const n = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `25`
).split("\n");

const N = +n;
let cnt = 0;

const main = () => {
  let input = N;
  while (input >= 5) {
    cnt += Math.floor(input / 5);
    input /= 5;
  }
  console.log(cnt);
};
main();
