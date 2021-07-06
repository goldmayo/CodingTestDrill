const fs = require("fs");
const input = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : ``
)
  .trim()
  .split("");

const stream = require("fs").readFileSync("/dev/stdin").toString().trim();
