/**
 * 부분 수열의 개수
 */
const [NS, ...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `5 0\n-7 -3 -2 5 8`
).split("\n");

const [N, S] = NS.split(" ").map(Number);
const inputSequence = inputs[0].split(" ").map(Number);
let ans = 0;

function isPromising(subsequence) {
  if (subsequence.length === 0) return;
  return subsequence.reduce((acc, curr) => acc + curr, 0) === S ? true : false;
}

function findSubsequence(start, sequence) {
  if (isPromising(sequence)) {
    console.log(sequence);
    ans += 1;
  }
  for (let i = start; i < N; i++) {
    sequence.push(inputSequence[i]);
    findSubsequence(i + 1, sequence);
    sequence.pop();
  }
}

findSubsequence(0, []);
console.log(ans);
