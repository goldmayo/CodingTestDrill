const [input] = (
  process.platform === "windows"
    ? require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
    : `0-8994+8+00-610+722+6691-482+65-3`
).split("\n");

const nums = [];
const result = [];

const minusReducer = (acc, curr) => acc - Math.abs(curr);
const plusReducer = (acc, curr) => acc + curr;

const findNextOperatorIdx = (curIdx) => {
  for (let i = curIdx; i < input.length; i++) {
    if (input[i] === "-") {
      return i;
    } else if (input[i] === "+") {
      return i;
    }
  }
  return input.length;
};

const findNextMinusNumsIdx = (curIdx) => {
  for (let i = curIdx; i < nums.length; i++) {
    if (nums[i] < 0 && i !== nums.length) {
      return i;
    } else if (i === nums.length - 1) {
      return i;
    }
  }
};

const makeArr = (arr) => {
  let frontOperand = Number(arr.slice(0, findNextOperatorIdx(0)));
  console.log("FO :", frontOperand);
  nums.push(frontOperand);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      let nextIdx = findNextOperatorIdx(i + 1);
      console.log("NI :", nextIdx);
      let backOperand = Number(arr.slice(i, nextIdx));
      console.log("BO :", backOperand);
      nums.push(backOperand);
    } else if (arr[i] === "+") {
      let nextIdx = findNextOperatorIdx(i + 1);
      console.log("NI :", nextIdx);
      let backOperand = Number(arr.slice(i, nextIdx));
      console.log("BO :", backOperand);
      nums.push(backOperand);
    }
  }
  nums.push(0);
  let fisrtMinusIdx = findNextMinusNumsIdx(0);
  let firstChunk = nums.slice(0, fisrtMinusIdx).reduce(plusReducer);
  result.push(firstChunk);
  console.log(nums);
};

const main = () => {
  makeArr(input);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && i !== nums.length) {
      console.log(i);
      let nextMinus = findNextMinusNumsIdx(i + 1);
      console.log("NM :", nextMinus);
      console.log(nums.slice(i, nextMinus));
      let minusChunk = nums.slice(i, nextMinus).reduce(minusReducer);
      result.push(minusChunk);
      console.log(minusChunk);
    } else if (nums[i] > 0) {
    }
  }
  console.log(nums);
  console.log(result);
  console.log(result.reduce(minusReducer));
};
main();
