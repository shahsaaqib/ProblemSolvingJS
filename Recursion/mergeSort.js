const arr = [4, 5, 2, 6, 7, 1, 0, 44, 26, 2, 8, 9];
console.log('unSOrted Array:', arr);

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const len = arr.length;
  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) res.push(left.shift());
    else res.push(right.shift());
  }
  return res.concat(left, right);
}
console.log('sorted Array:', mergeSort(arr));
