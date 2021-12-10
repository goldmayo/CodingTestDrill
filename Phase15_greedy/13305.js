const [n, length, price] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `7\n3 4 2 2 4 5\n8 9 5 4 2 7 1`
).split("\n");

const N = +n;
const L = length.split(" ").map((el) => BigInt(el));
const P = price.split(" ").map((el) => BigInt(el));
let cost = 0n;
let minP = P[0];

for (let i = 0; i < L.length; i++) {
  console.log("i :", i);
  console.log(`P[i] : ${P[i]}\nL[i] : ${L[i]}\nminP : ${minP}`);
  cost += minP * L[i];
  console.log("cost :", cost);
  if (minP > P[i + 1]) {
    minP = P[i + 1];
  }
}
console.log(String(cost));
