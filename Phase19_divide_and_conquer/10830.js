const [nb, ...matrix] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `2 1\n1 2\n3 4`
).split("\n");
// `2 1\n1000 1000\n1000 1000`
// `3 3\n1 2 3\n4 5 6\n7 8 9`
// `2 5\n1 2\n3 4`
// `5 10\n1 0 0 0 1\n1 0 0 0 1\n1 0 0 0 1\n1 0 0 0 1\n1 0 0 0 1`

const [N, B] = nb.split(" ").map(Number);
const Matrix = matrix.map((e) => e.split(" ").map(Number));
const MOD = 1000;
let binaryB = "";

const getMatrixProduct = (X, Y) => {
  const XY = Array.from(Array(X.length), () => new Array(X.length).fill(0));
  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < Y.length; j++) {
      for (let k = 0; k < X[0].length; k++) {
        XY[i][j] += (X[i][k] * Y[k][j]) % MOD;
        XY[i][j] %= MOD;
      }
    }
  }
  return XY;
};
const divideByMOD = (X) => {
  let result = [...X];
  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < X.length; j++) {
      result[i][j] %= MOD;
    }
  }
  return result;
};
const divide = (count, base) => {
  if (count === 0) {
    return divide(count + 1, Matrix);
  }
  if (count === binaryB.length - 1) {
    return binaryB[count] === "1"
      ? getMatrixProduct(getMatrixProduct(base, base), Matrix)
      : getMatrixProduct(base, base);
  }
  return binaryB[count] === "1"
    ? divide(count + 1, getMatrixProduct(getMatrixProduct(base, base), Matrix))
    : divide(count + 1, getMatrixProduct(base, base));
};

const main = () => {
  let result;
  binaryB = B.toString(2);
  binaryB.length - 1 === 0 ? (result = divideByMOD(Matrix)) : (result = divide(0, Matrix));
  console.log(result.map((e) => e.join(" ")).join("\n"));
};
main();
