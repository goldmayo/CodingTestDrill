const [n, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `3\n1 0\n5\n4 2\n1 2 3 4\n6 0\n1 1 9 1 1 1`
).split("\n");

const N = +n;
const inputs = input.map((e) => e.split(" ").map((v) => +v));
const iterator = inputs[Symbol.iterator]();
let answer = "";
let count = N;

while (count--) {
  const [numberOfDocs, target] = iterator.next().value;
  let docs = iterator.next().value;
  let position = Array.from({ length: numberOfDocs }, (v, i) => i);

  if (numberOfDocs === 1) {
    answer += `1\n`;
  } else {
    let max = Math.max(...docs);
    let orderCount = 0;

    while (docs.length) {
      if (docs[0] < max) {
        docs.push(docs.shift());
        position.push(position.shift());
      } else {
        docs.shift();
        let order = position.shift();
        orderCount++;
        if (order === target) {
          answer += `${orderCount}\n`;
          orderCount = 0;
          break;
        }
        max = Math.max(...docs);
      }
    }
  }
}
console.log(answer);
