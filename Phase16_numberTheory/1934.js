const [n, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3\n1 45000\n6 10\n13 17`
).split("\n");

const N = +n;
const inputs = input.map((el) =>
  el
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => b - a)
);
console.log(inputs);
const Euclidean = (a, b) => {
  while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const getLcm = (a, b, gcd) => {
  return (a * b) / gcd;
};

const main = () => {
  for (let i = 0; i < N; i++) {
    let gcd = Euclidean(inputs[i][0], inputs[i][1]);
    let lcm = getLcm(inputs[i][0], inputs[i][1], gcd);
    console.log(lcm);
  }
};
main();
