const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const T = 2;
// const input = ["3 ABC", "5 /HTP"];
// console.log(T);
// console.log(input); //[ '3 ABC', '5 /HTP' ]
// let inputs = input[0].split(" ");
// console.log(inputs); //[ '3', 'ABC' ]

for (let k = 0; k < T; k++) {
  let inputs = input[k].split(" ");

  let repeatNum = inputs[0];

  let repeatStr = inputs[1];

  let result = "";
  for (let i = 0; i < repeatStr.length; i++) {
    result += repeatStr[i].repeat(repeatNum);
  }
  console.log(result);
}
