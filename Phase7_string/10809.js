// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "backjoon";
const inputs = Array.from(input);

let alphabet = new Map();

for (let i = 0; i < 26; i++) {
  alphabet.set(String.fromCharCode(i + 97), -1);
}
for (let i = 0; i < input.length; i++) {
  let substr = input[i];
  for (let key of alphabet.keys()) {
    if (key === substr) {
      alphabet.set(key, input.indexOf(substr));
    }
  }
}

const result = Array.from(alphabet.values());
console.log(result.join(" "));
