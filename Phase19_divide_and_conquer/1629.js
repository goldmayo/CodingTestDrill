const abc = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `10 11 12`
).split("\n");

const [A, B, C] = abc[0].split(" ").map((e) => BigInt(e));
let dp;

const convertToBinary = (x) => {
  return x.toString(2);
};

const extractPowerOfTwo = (bin) => {
  let result = [];
  for (let i = 1; i <= bin.length; i++) {
    if (bin[bin.length - i] === "1") {
      result.push(Math.pow(2, i - 1));
    }
  }
  return result;
};

const divide = (base, power, mod) => {
  if (power === 1) {
    return dp[0];
  }
  if (dp[Math.log2(power)] !== 0) {
    return dp[Math.log2(power)];
  }
  return (dp[Math.log2(power)] =
    (divide(base, Math.floor(power / 2), mod) *
      divide(base, Math.floor(power / 2), mod)) %
    mod);
};

const createDP = (length) => {
  dp = Array.from({ length: length }).fill(0);
};
const main = () => {
  let binaryExponent = convertToBinary(B);
  createDP(binaryExponent.length);
  dp[0] = A % C;
  let powers = extractPowerOfTwo(binaryExponent);
  let divideChunks = [];
  for (let i = 0; i < powers.length; i++) {
    divideChunks.push(divide(A, powers[i], C));
  }
  console.log(parseInt(divideChunks.reduce((acc, curr) => acc * curr) % C));
};
main();
