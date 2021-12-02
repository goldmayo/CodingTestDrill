// https://ko.wikipedia.org/wiki/%ED%80%B5_%EC%A0%95%EB%A0%AC
const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivot = partition(arr, start, end);
    console.log(pivot);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  }
  return arr;
};
const partition = (arr, start, end) => {
  console.log("arr :", arr);
  console.log("start :", start);
  console.log("end :", end);
  let i = start;
  let j = end;
  let median = Math.floor((start + end) / 2);
  swap(arr, start, median);
  console.log("swaparr :", arr);

  let pivot = arr[start];
  console.log("pivot :", pivot);
  //제자리 더 큰수/더 작은 수 좌우 배치.
  while (i < j) {
    while (arr[j] > pivot) j--;
    while (i < j && arr[i] <= pivot) i++;
    console.log("i :", i);
    console.log("j :", j);
    swap(arr, i, j);
    console.log("afterswaparr :", arr);
  }
  console.log("arr[start] :", arr[start]);
  console.log("arr[j] :", arr[j]);
  console.log("pivot :", pivot);
  arr[start] = arr[j];
  arr[j] = pivot;
  console.log("after :", arr);
  return j;
};
const swap = (arr, a, b) => {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};
const arrr = [1, 4, 6, 3, 2, 7, 5];
const result = quickSort(arrr);
console.log(result);
{
  const quickSort = (arr, start = 0, end = arr.length - 1) => {
    if (start < end) {
      let pivot = partition(arr, start, end);
      quickSort(arr, start, pivot - 1);
      quickSort(arr, pivot + 1, end);
    }
    return arr;
  };
  const partition = (arr, start, end) => {
    let i = start;
    let j = end;
    let median = Math.floor((start + end) / 2);
    swap(arr, start, median);

    let pivot = arr[start];
    //제자리 더 큰수/더 작은 수 좌우 배치.
    while (i < j) {
      while (arr[j] > pivot) j--;
      while (i < j && arr[i] <= pivot) i++;
      swap(arr, i, j);
    }
    arr[start] = arr[j];
    arr[j] = pivot;
    return j;
  };
  const swap = (arr, a, b) => {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };
}
