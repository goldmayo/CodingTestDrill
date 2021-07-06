const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// console.log(T);
// console.log(input);
// const T = "5";
// const input = [
//   "OOXXOXXOOO",
//   "OOXXOOXXOO",
//   "OXOXOXOXOXOXOX",
//   "OOOOOOOOOO",
//   "OOOOXOOOOXOOOOX",
// ];
// const testO = "O";
// const testX = "X";
// console.log(input[0][0] === testO); //true

// const iterator = input[0][Symbol.iterator]();
// let theChar = iterator.next();
// let count = 0;
// let acc = 0;
// while (!theChar.done) {
//   console.log(theChar.value);
//   if (theChar.value === "O") {
//     count++;
//     acc = acc += count;
//   }
//   if (theChar.value === "X") {
//     count = 0;
//   }
//   theChar = iterator.next();
// }
let count = 0;
let acc = 0;
for (let i = 0; i < input.length; i++) {
  const iterator = input[i][Symbol.iterator]();
  let theChar = iterator.next();

  while (!theChar.done) {
    // console.log(theChar.value);
    if (theChar.value === "O") {
      count++;
      acc = acc += count;
    } else {
      count = 0;
    }
    theChar = iterator.next();
  }
  console.log(acc);
  acc = 0;
  count = 0;
}
