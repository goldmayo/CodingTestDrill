const input = +require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();
let N = input;
let endNumber = 665;

while (N > 0) {
  endNumber++;
  if (endNumber.toString().includes("666")) {
    N--;
  }
}
console.log(endNumber);
