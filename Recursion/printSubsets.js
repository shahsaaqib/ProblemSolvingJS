const str = 'abc';
let outStr = '';
function printSubset(str, outStr) {
  if (str.length === 0) {
    console.log(outStr);
    return;
  }
  let str1 = outStr;
  let str2 = outStr;
  str2 += str[0];
  str = str.slice(1);
  printSubset(str, str1);
  printSubset(str, str2);
  return;
}
console.log(printSubset(str, outStr));
