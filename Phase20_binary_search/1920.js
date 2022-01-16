const [...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `1\n1\n1\n0`
).split("\n");
const [N, A, M, nums] = inputs.map((e) => e.split(" ").map((v) => +v));

const binarySearch = (arr, target, start, end) => {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return true;
  } else {
    return arr[mid] < target
      ? binarySearch(arr, target, mid + 1, end)
      : binarySearch(arr, target, start, mid - 1);
  }
};
const main = () => {
  let result = "";
  A.sort((a, b) => a - b);
  nums.forEach((e) => {
    binarySearch(A, e, 0, N - 1) ? (result += "1\n") : (result += "0\n");
  });
  console.log(result);
};
main();

//set으로 중복을 제거하고 obeject has() 를 이용한 방법
// const [...inputs] = (
//     process.platform === "linux"
//       ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
//       : `5\n4 1 5 2 3\n5\n1 3 7 9 5`
//   ).split("\n");
//   let result = ""
//   const [N, A, M, nums] = inputs;
//   const setA = new Set(A.split(" "));
//   nums.split(" ").forEach((e) => {
//     setA.has(e) ? result+="1\n" : result+="0\n";
//   });
//   console.log(result);
