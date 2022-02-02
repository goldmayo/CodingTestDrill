{
  const [input] = (
    process.platform === "windows"
      ? require("fs").readFileSync("/dev/stdin", "utf-8").toString().trim()
      : `5 17`
  ).split("\n");

  const MIN = 0;
  const MAX = 100000;

  function setNext(next, visit, stack) {
    if (next < MIN || next > MAX) return;
    if (visit[next]) return;
    stack.push(next);
  }

  function solution(n, k) {
    const visit = Array(MAX + 1).fill(false);

    let list = [];
    let time = -1;
    let cnt = 0;

    setNext(n, visit, list);

    while (cnt === 0) {
      const temp = [];
      console.log(list);
      list.forEach((cur) => {
        if (cur === k) {
          cnt += 1;
        } else {
          setNext(cur + 1, visit, temp);
          setNext(cur - 1, visit, temp);
          setNext(cur * 2, visit, temp);
        }
      });
      console.log("temp", temp);
      temp.forEach((num) => {
        visit[num] = true;
      });

      time += 1;
      list = temp;
    }

    return `${time}\n${cnt}`;
  }

  const [n, k] = input.split(" ").map(Number);
  const ans = solution(n, k);

  console.log(ans);
}
