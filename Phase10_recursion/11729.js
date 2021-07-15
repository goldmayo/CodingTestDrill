{
  /**
   * Tower of Hanoi
   * plate : 1,2,...,N
   * tower : 1,2,3
   * 원판의 개수가 홀수 : 첫 원판을 목적기둥으로 원판을 보낸다
   * 원판의 개수가 짝수 : 첫 원판을 목적기둥이 아닌 곳으로 원판을 보낸다
   */
  //   const input = require("fs")
  //     .readFileSync("/dev/stdin", "utf8")
  //     .toString()
  //     .trim();
  //   let N = parseInt(input);
  let N = 3;
  let count = 0;
  let result = "";
  function movePlate(plate, source, axuiliary, dest) {
    if (plate === 0) return;
    count++;
    movePlate(plate - 1, source, dest, axuiliary);
    result += `${source} ${dest} :${plate}\n`;
    movePlate(plate - 1, axuiliary, source, dest);
  }

  function solution(N) {
    movePlate(N, 1, 2, 3);
    console.log(count);
    console.log(result);
  }
  solution(N);
}
