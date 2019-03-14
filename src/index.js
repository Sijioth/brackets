module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  for (let i = 0; i < str.length; i++){
    stack.push(str[i]);
    // if (str[i + 1] == bracketsConfig[stack[stack.length - 1]]) stack.pop();
    // console.log("closing bracket form config:" + bracketsConfig[stack[stack.length - 1]]);
    // console.log(stack[stack.length - 1]);
    for (let j = 0; j < bracketsConfig.length; j++) {
      // let arr = bracketsConfig[j];
      // console.log(arr[stack[stack.length - 1]]);

      for (let key in bracketsConfig[j]) {
        // console.log("key: " + key + " value: " + bracketsConfig[j][1]);
      // console.log(stack[stack.length - 1] in bracketsConfig);
      // console.log(bracketsConfig[stack[stack.length - 1]]);
      if (str[i + 1] == bracketsConfig[j][stack[stack.length - 1]]) stack.pop();
      }
    }
    // for (const key in bracketsConfig) {
    //   console.log(stack[stack.length - 1] in bracketsConfig);
    // }
    // while (str[i + 1] == bracketsConfig[stack[stack.length - 1]]) {
    //   stack.pop();
    //   i++;
    //   if (i >= str.length) break;
    // }
  }
  // console.log(stack);
  return stack.length == 0 ? true : false;
}
