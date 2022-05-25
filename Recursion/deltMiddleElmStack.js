const stack = [5, 4, 3, 2, 1];
console.log('before deletion:', stack);
const mid = Math.floor(stack.length / 2) + 1;
function delStack(stack, k) {
  if (k === 1) {
    stack.pop();
    return stack;
  }
  const temp = stack.pop(); //top of stack
  delStack(stack, k - 1);
  stack.push(temp);
  return stack;
}
console.log('After deletion:', delStack(stack, mid));
