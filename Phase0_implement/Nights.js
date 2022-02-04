const input = "c2";
const steps = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
];
const rowIdx = ["none", "a", "b", "c", "d", "e", "f", "g", "h"];
const [row, col] = input.split("");
let count = 0;
for (let i = 1; i < 9; i++) {
  if (row === rowIdx[i]) {
    let x = i;
    let y = +col;
    for (const step of steps) {
      let nx = x + step[0];
      let ny = y + step[1];
      if (nx < 1 || nx > 8 || ny < 1 || ny > 8) continue;
      count += 1;
    }
  }
}
console.log(count);
