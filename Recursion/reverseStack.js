const stack = [1, 2, 3, 7, 5, 6, 4];
function reverseStack(stack) {
  if (stack.length === 1) return stack;
  const temp = stack.pop();
  //console.log(stack);
  reverseStack(stack);
  insert(stack, temp);
  return stack;
}
function insert(stack, temp) {
  if (stack.length === 0) {
    stack.push(temp);
    return stack;
  }
  //console.log(stack);
  let val = stack.pop();
  insert(stack, temp);
  stack.push(val);
}
console.log(reverseStack(stack));
