const [n, input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `5\n3 1 4 3 2`
).split("\n");

const N = +n;
const P = input.split(" ").map((el) => +el);
//오름차수 정렬
const sortP = P.sort((a, b) => a - b);
console.log(sortP);

let curr = sortP[0];
let count = curr;
for (let i = 1; i < N; i++) {
  curr = curr + sortP[i];
  count = count + curr;
}

console.log(count);
