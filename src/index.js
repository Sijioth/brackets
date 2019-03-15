module.exports = function check(str, bracketsConfig) {
  // my solution
  let obj = {};                                       // convert bracketsConfig to associated array (object)
  for (let k = 0; k < bracketsConfig.length; k++) {
    obj[bracketsConfig[k][0]] = bracketsConfig[k][1];
  }

  let stack = [];
  for (let i = 0; i < str.length; i++){               // treat input string like stack
    stack.push(str[i]);
      while (str[i + 1] == obj[stack[stack.length - 1]]) {  // while next value is closing brackets, we'll take values from the stack one by one
        stack.pop();
        i++;
        if (str[i + 1] === undefined) break;
      }
  }
  
  return stack.length == 0 ? true : false;
}
