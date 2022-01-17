const [...inputs] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
    : `4\n-1 -3 0 0\n5\n-3 0 -1 0 2`
).split("\n");
// `10\n6 3 2 10 10 10 -10 -10 7 3\n8\n10 9 -5 2 3 4 5 -10`
const [N, collectedCards, M, cards] = inputs.map((e) => e.split(" ").map((v) => +v));
const countMap = new Map();
for (let e of cards) {
  countMap.set(e, 0);
}
const main = () => {
  let answer = "";
  collectedCards.forEach((e) => {
    countMap.has(e) ? countMap.set(e, countMap.get(e) + 1) : "";
  });
  cards.forEach((e) => {
    answer += `${countMap.get(e)} `;
  });
  console.log(answer);
};
main();
// {
//   const [...inputs] = (
//     process.platform === "windows"
//       ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
//       : `4\n-1 -3 0 0\n5\n-3 0 -1 0 2`
//   ).split("\n");
//   // `10\n6 3 2 10 10 10 -10 -10 7 3\n8\n10 9 -5 2 3 4 5 -10`
//   const [N, collectedCards, M, cards] = inputs.map((e) => e.split(" ").map((v) => +v));
//   const countMap = new Map();
//   let answer = "";
//   for (let e of cards) {
//     countMap.set(e, 0);
//   }
//   const binarySearch = (arr, target, start, end) => {
//     if (start > end) return false;
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return true;
//     } else {
//       return arr[mid] < target
//         ? binarySearch(arr, target, mid + 1, end)
//         : binarySearch(arr, target, start, mid - 1);
//     }
//   };
//   const main = () => {
//     const originCardsOrder = [...cards];
//     cards.sort((a, b) => a - b);
//     collectedCards.forEach((e) => {
//       binarySearch(cards, e, 0, N - 1) ? countMap.set(e, countMap.get(e) + 1) : "";
//     });
//     originCardsOrder.forEach((e) => {
//       answer += `${countMap.get(e)} `;
//     });
//     console.log(answer);
//   };
//   main();
// }
