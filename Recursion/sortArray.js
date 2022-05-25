arr = [4, 5, 2, 6, 7, 1, 0, 44, 26, 2, 8, 9];
console.log('unSOrted Array:', arr);
function sortArr(arr) {
  if (arr.length === 1) return arr;
  let temp = arr[arr.length - 1];
  arr.pop();
  sortArr(arr);
  Insert(arr, temp);
  return arr;
}
function Insert(arr, temp) {
  if (arr.length === 0 || temp >= arr[arr.length - 1]) return arr.push(temp);
  let val = arr[arr.length - 1];
  arr.pop();
  Insert(arr, temp);
  arr.push(val);
}
console.log('sortedArray:', sortArr(arr));
