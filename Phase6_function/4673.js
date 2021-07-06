function dn(num) {
  let sum = num;
  const t = String(num).length;
  for (let i = 0; i < t; i++) {
    sum += num % 10;
    // console.log(`sum: ${sum}`);
    num = Math.floor(num / 10);
    // console.log(`num: ${num}`);
  }
  return sum;
}
const range = 10000;
let selfNumbers = new Array(range + 1).fill(true); // 0 ~ 10000

for (let i = 1; i < selfNumbers.length; i++) {
  const n = dn(i);
  if (n <= range) {
    selfNumbers[n] = false;
  }
}

for (let i = 1; i < selfNumbers.length - 1; i++) {
  if (selfNumbers[i]) {
    console.log(i);
  }
}

// console.log(selfNumbers.length); // 10001
