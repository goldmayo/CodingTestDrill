{
  const [N, ...input] = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .toString()
    .trim()
    .split("\n")
    .map((el) => +el);

  const mergeSort = (arr) => {
    let tmp = Array(N);
    Split(arr, tmp, 0, N - 1);
  };

  const Split = (arr, tmp, start, end) => {
    if (start < end) {
      let mid = Math.floor((start + end) / 2);
      Split(arr, tmp, start, mid);
      Split(arr, tmp, mid + 1, end);
      merge(arr, tmp, start, end, mid);
    }
  };

  const merge = (arr, tmp, start, end, mid) => {
    for (let i = start; i <= end; i++) {
      tmp[i] = arr[i];
    }
    let part1 = start;
    let part2 = mid + 1;
    let idx = start;
    while (part1 <= mid && part2 <= end) {
      if (tmp[part1] <= tmp[part2]) {
        arr[idx] = tmp[part1];
        part1++;
      } else {
        arr[idx] = tmp[part2];
        part2++;
      }
      idx++;
    }
    for (let i = 0; i <= mid - part1; i++) {
      arr[idx + i] = tmp[part1 + i];
    }
  };

  const findMean = (arr) => {
    const sum = arr.reduce((acc, curr) => acc + curr);
    const mean = Math.round(sum / N);
    return mean;
  };

  const findmedian = (arr) => {
    return arr[Math.floor(N / 2)];
  };

  const findFrequency = (arr) => {
    let maxFrq = 0;
    const frqMap = new Map();
    let maxFrqArr = [];
    for (let el of arr) {
      frqMap.has(el) ? frqMap.set(el, frqMap.get(el) + 1) : frqMap.set(el, 1);
    }
    const maxFrqKey = Math.max(...frqMap.values());
    frqMap.forEach((value, key) => {
      if (value === maxFrqKey) {
        maxFrqArr.push(key);
      }
    });
    maxFrqArr.length > 1 ? (maxFrq = maxFrqArr[1]) : (maxFrq = maxFrqArr[0]);
    return maxFrq;
  };

  const findRange = (arr) => {
    return Math.abs(arr[N - 1] - arr[0]);
  };

  const solution = () => {
    let arr = input;
    mergeSort(arr);
    console.log(findMean(arr));
    console.log(findmedian(arr));
    console.log(findFrequency(arr));
    console.log(findRange(arr));
  };

  solution();
}
