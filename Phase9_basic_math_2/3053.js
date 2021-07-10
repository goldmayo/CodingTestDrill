const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();
let R = +input;

function euclidCircle(radius) {
  return (Math.PI * Math.pow(radius, 2)).toFixed(6);
}

function taxiCircle(radius) {
  return (2 * Math.pow(radius, 2)).toFixed(6);
}

console.log(euclidCircle(R));
console.log(taxiCircle(R));
