{
  const [N, ...input] = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim()
    .split("\n");

  const lenMap = new Map();
  for (const el of input) {
    lenMap.set(el, el.length);
  }

  function comapreAB(a, b) {
    var nameA = a;
    var nameB = b;
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  }

  const MAX = Math.max(...lenMap.values());
  let arr = [...lenMap.entries()].sort(comapreAB);
  let count = Array(MAX + 1);
  let result = Array(arr.length);

  for (let i = 0; i < count.length; i++) {
    count[i] = 0;
  }

  for (let j = 0; j < arr.length; j++) {
    count[arr[j][1]]++;
  }

  for (let k = 0; k < count.length - 1; k++) {
    count[k + 1] += count[k];
  }

  for (let i = 0; i < arr.length; i++) {
    result[count[arr[i][1]] - 1] = arr[i][0];
    count[arr[i][1]] -= 1;
  }

  console.log(result.join("\n"));
}
