const input = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `4 11`
).split("\n");

const [A, B] = input[0]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => b - a);

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
  const gcd = Euclidean(A, B);
  const lcm = getLcm(A, B, gcd);
  console.log(gcd);
  console.log(lcm);
};
main();
