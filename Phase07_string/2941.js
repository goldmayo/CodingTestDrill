const stream = require("fs").readFileSync("/dev/stdin").toString().trim();

let input = stream;
const hrAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let char of hrAlphabet) {
  input = input.split(char).join("Q");
}

console.log(input.length);
