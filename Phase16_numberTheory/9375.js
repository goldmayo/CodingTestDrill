const input = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `2\n3\nhat headgear\nsunglasses eyewear\nturban headgear\n3\nmask face\nsunglasses face\nmakeup face`
).split("\n");

const iterator = input[Symbol.iterator]();

let T = +iterator.next().value;
while (T--) {
  const item = {};
  let N = +iterator.next().value;
  while (N--) {
    const [_, kind] = iterator.next().value.split(" ");
    item[kind] = (item[kind] ?? 0) + 1;
  }
  console.log([...Object.values(item)].reduce((acc, curr) => acc * (curr + 1), 1) - 1);
}
/**
 * https://tesseractjh.tistory.com/123
 * headgear를 입는 경우 2가지, 입지 않는 경우 1가지가 있고,

별개로 eyewear를 입는 경우 1가지, 입지 않는 경우 1가지가 있다.

따라서 입을 수 있는 옷의 조합은 (2 + 1) * (1 + 1) = 6가지이다.

그러나, 알몸이 아닌 상태여야 하므로 반드시 1개 이상의 옷을 입어야 한다.

따라서 모든 옷을 입지 않은 경우 1가지를 빼면 최종적으로 5가지가 된다.
 */
