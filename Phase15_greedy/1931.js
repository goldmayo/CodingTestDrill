const [n, ...input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `11\n1 4\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n12 14`
).split("\n");

const N = +n;
const Meetings = input.map((el) => el.split(" ").map((e) => +e));
let count = 1;

const main = () => {
  Meetings.sort(function (a, b) {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  let SETM = Meetings[0];
  for (let i = 1; i < N; i++) {
    if (Meetings[i][0] >= SETM[1]) {
      SETM = Meetings[i];
      console.log(Meetings[i]);
      count++;
    }
  }
  console.log(count);
};
main();
