const [n, input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `4\n12 3 16 4`
).split("\n");

const N = +n;
const gear = input.split(" ").map((v) => +v);
let result = "";

const Euclidean = (a, b) => {
  while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const firstGear = gear[0];

for (let i = 1; i < N; i++) {
  let gcd = Euclidean(firstGear, gear[i]);
  result += `${firstGear / gcd}/${gear[i] / gcd}\n`;
}
console.log(result);
