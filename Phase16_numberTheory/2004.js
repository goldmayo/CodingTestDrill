const input = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `2000000000 1`
).split("\n");

const [N, M] = input[0].split(" ").map((v) => +v);
const NM = N - M;

const count_number = (num) => {
  let countOfTwo = 0;
  let countOfFive = 0;
  for (let i = 2; i <= num; i *= 2) {
    countOfTwo += parseInt(num / i);
  }
  for (let i = 5; i <= num; i *= 5) {
    countOfFive += parseInt(num / i);
  }
  return [countOfTwo, countOfFive];
};

const main = () => {
  const two = count_number(N)[0] - (count_number(M)[0] + count_number(NM)[0]);
  const five = count_number(N)[1] - (count_number(M)[1] + count_number(NM)[1]);
  const result = Math.min(two, five);
  console.log(result);
};
main();
// https://www.acmicpc.net/board/view/72777
// https://velog.io/@po4tion/%EB%B0%B1%EC%A4%80-node.js-boj-2004-%ED%92%80%EC%9D%B4
