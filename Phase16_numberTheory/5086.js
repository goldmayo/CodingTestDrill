const [...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `8 16\n32 4\n17 5\n0 0`
).split("\n");

const input = inputs.map((el) => el.split(" ").map((v) => +v));
console.log(input);

for (let i = 0; i < input.length; i++) {
  if (input[i][0] === 0 && input[i][1] === 0) {
    break;
  }
  if (input[i][1] % input[i][0] === 0) {
    console.log("factor");
  } else if (input[i][0] % input[i][1] === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
