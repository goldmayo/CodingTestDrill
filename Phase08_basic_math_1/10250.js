// const T = 2;
// let input = ["6 12 10", "30 50 72"];

const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// console.log(T);
// console.log(input);

for (let i = 0; i < +T; i++) {
  let [H, W, N] = input[i].split(" ").map((el) => +el);
  let floorNumber = N % H;
  if (floorNumber === 0) {
    floorNumber = H;
  }
  let roomNumber = Math.ceil(N / H);
  roomNumber < 10 ? (roomNumber = String(0) + roomNumber) : roomNumber;
  console.log(`${floorNumber}${roomNumber}`);
}
/*
  if (N % H === 0) {
    floorNumber = H;
    roomNumber = String(Math.floor(N / H));
    if (+roomNumber < 10) {
      roomNumber = roomNumber.padStart(2, "0");
    }
    console.log(`${floorNumber}${roomNumber}`);
  } else {
    floorNumber = N % H;
    roomNumber = String(Math.ceil(N / H));
    if (+roomNumber < 10) {
      roomNumber = roomNumber.padStart(2, "0");
    }
    console.log(`${floorNumber}${roomNumber}`);
  }
*/
