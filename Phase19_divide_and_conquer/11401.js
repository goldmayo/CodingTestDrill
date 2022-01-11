const nk = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `950 100`
).split("\n");
const [N, K] = nk[0].split(" ").map((e) => BigInt(e));
const P = BigInt(1000000007);

const getModuloNumerator = (n, k, p) => {
  let numerator = 1n;
  for (let i = n; i > n - k; i--) {
    numerator = (numerator * i) % p;
  }
  return numerator;
};
const getModuloDenominator = (k, p) => {
  let denominator = 1n;
  for (let i = k; i > 0; i--) {
    denominator = (denominator * i) % p;
  }
  return denominator;
};

const getModuloInverse = (base, power, mod) => {
  let result = 1n;
  base = base % mod;
  if (base === 0n) {
    return 0n;
  }
  while (power > 0n) {
    if (power & 1n) {
      result = (result * base) % mod;
    }
    power = power >> 1n;
    base = (base * base) % mod;
  }
  return result;
};
const getFermatBinomialCoefficient = (numerator, denominator) => {
  let denominatorInverse = getModuloInverse(denominator, P - 2n, P);
  let res = (numerator * denominatorInverse) % P;
  return res;
};
const main = () => {
  let numerator = getModuloNumerator(N, K, P);
  let denominator = getModuloDenominator(K, P);
  console.log(parseInt(getFermatBinomialCoefficient(numerator, denominator)));
};
main();
