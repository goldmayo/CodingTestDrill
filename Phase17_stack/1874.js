const [n, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `8\n4\n3\n6\n8\n7\n5\n2\n1`
).split("\n");
// `5\n1\n2\n5\n3\n4`

const N = +n;
const sequence = input.map((e) => +e);
console.log(sequence);
const inputs = input.map((e) => +e).sort((a, b) => a - b);
const stack = [];
let nowSequence = "";
let answer = "";
let inputIdx = 0;
const iterator = sequence[Symbol.iterator]();

for (let k = 0; k < N; k++) {
  let nextSequnce = iterator.next().value;
  for (let i = inputIdx; i < N; i++) {
    console.log("nextSequence :", nextSequnce);
    console.log("inputIdx :", inputIdx);
    console.log("i :", i);
    if (inputs[i] <= nextSequnce) {
      console.log("push :", inputs[i]);
      stack.push(inputs[i]);
      answer += "+\n";
      inputIdx++;
    }
    if (stack[stack.length - 1] === nextSequnce) {
      console.log("pop :", stack[stack.length - 1]);
      nowSequence += `${stack[stack.length - 1]}`;
      stack.pop();
      answer += "-\n";
      break;
    }
    console.log(stack);
    console.log("nowSequnce :", nowSequence);
  }
}
console.log("------");
const restSequence = stack.length;
for (let i = 0; i < restSequence; i++) {
  console.log("pop :", stack[stack.length - 1]);
  nowSequence += `${stack[stack.length - 1]}`;
  console.log("nowSequnce :", nowSequence);
  stack.pop();
  answer += "-\n";
}
console.log(stack);
nowSequence === sequence.join("") ? console.log(answer) : console.log("NO");
