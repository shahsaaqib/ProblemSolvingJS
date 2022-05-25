function countpaths(i, j, m, n) {
  if (i === m - 1 && j === n - 1) return 1;
  if (i > m - 1 || j > n - 1) return 0;
  else return countpaths(i + 1, j, m, n) + countpaths(i, j + 1, m, n);
}
console.log(countpaths(0, 0, 3, 7));
console.log(countpaths(0, 0, 2, 3));
console.log(countpaths(0, 0, 3, 3));
