const [...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3 2\n1 2\n3 4\n5 6\n2 3\n-1 -2 0\n0 0 3`
).split("\n");

const iterator = inputs[Symbol.iterator]();

const createMatrix = (count, arr) => {
  while (count--) {
    let row = iterator.next().value;
    arr.push(row.split(" ").map((e) => +e));
  }
  return arr;
};
const transeposeMatrix = (arr, row, col) => {
  let result = [];
  for (let i = 0; i < col; i++) {
    let temp = [];
    for (let j = 0; j < row; j++) {
      temp.push(arr[j][i]);
    }
    result.push(temp);
  }
  return result;
};
const getMatrixProduct = (x, y) => {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    let temp = [];
    for (let j = 0; j < y.length; j++) {
      let acc = 0;
      for (let k = 0; k < x[0].length; k++) {
        acc += x[i][k] * y[j][k];
      }
      temp.push(acc);
    }
    result.push(temp);
  }
  return result;
};
const main = () => {
  const NM = iterator.next().value;
  const [aRow, aCol] = NM.split(" ").map((e) => +e);
  const A = createMatrix(aRow, []);
  const MK = iterator.next().value;
  const [bRow, bCol] = MK.split(" ").map((e) => +e);
  const B = createMatrix(bRow, []);
  const Bt = transeposeMatrix(B, bRow, bCol);
  const ABtProduct = getMatrixProduct(A, Bt);
  console.log(ABtProduct.map((e) => e.join(" ")).join("\n"));
};
main();
