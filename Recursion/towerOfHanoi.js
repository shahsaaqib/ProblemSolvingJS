const n = 3;
const s = 1,
  h = 2,
  d = 3;
steps = 0;
function solveTower(s, d, h, n) {
  steps++;
  if (n === 1) {
    console.log(`move disk ${n} from ${s} to ${d}`);
    return;
  }
  solveTower(s, h, d, n - 1);
  console.log(`move disk ${n} from ${s} to ${d}`);
  solveTower(h, d, s, n - 1);
  return steps;
}
console.log(solveTower(s, d, h, n));
