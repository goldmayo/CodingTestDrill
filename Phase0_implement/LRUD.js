const N = 5;
const plans = ["R", "R", "R", "U", "D", "D"];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const command = ["U", "R", "D", "L"];

const solution = () => {
  let currentY = 1;
  let currentX = 1;
  let ny;
  let nx;
  for (const plan of plans) {
    for (let i = 0; i < command.length; i++) {
      if (plan === command[i]) {
        ny = currentY + dy[i];
        nx = currentX + dx[i];
        break;
      }
    }
    if (nx >= 1 && nx <= N && ny >= 1 && ny <= N) {
      currentY = ny;
      currentX = nx;
    }
  }
  console.log(`${currentX} ${currentY}`);
};
solution();
