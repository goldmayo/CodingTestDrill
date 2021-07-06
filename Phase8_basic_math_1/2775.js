const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const T = 1;
// const input = [14, 14];
let inputs = [];
for (let i = 0; i < +T; i++) {
  inputs.push(input.slice(i * 2, (i + 1) * 2));
}

let dpTable = Array.from(Array(14), () => Array(14).fill(null));

const initializeDpTable = (dpTable) => {
  let zeroFloor = [];
  for (let i = 0; i < 14; i++) {
    zeroFloor.push(i + 1);
  }
  dpTable.unshift(zeroFloor);

  for (let i = 0; i < 15; i++) {
    dpTable[i][0] = 1;
  }
  return dpTable;
};

const fillTable = (dpTable, k, n) => {
  if (k === 0) return dpTable[0][n];
  if (n === 0) return 1;
  dpTable[k][n] = fillTable(dpTable, k, n - 1) + fillTable(dpTable, k - 1, n);
  return dpTable[k][n];
};
const solution = () => {
  dpTable = initializeDpTable(dpTable);
  for (el of inputs) {
    let [k, n] = el;
    console.log(fillTable(dpTable, +k, +n - 1));
  }
  // console.table(dpTable);
};

solution();
