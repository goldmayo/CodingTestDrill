const BFS = (numbers, target) => {
  let result = 0;
  let leaves = [0];
  for (const num of numbers) {
    let childLeaves = [];
    for (const parent of leaves) {
      childLeaves.push(parent + num);
      childLeaves.push(parent - num);
    }
    leaves = childLeaves;
  }
  for (const leaf of leaves) {
    if (leaf === target) {
      result += 1;
    }
  }
  return result;
};
function solution(numbers, target) {
  var answer = BFS(numbers, target);
  return answer;
}
