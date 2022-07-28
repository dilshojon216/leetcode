var isValid = function(s) {
  let brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let help = [];
  for(let chars of s){
    if (brackets[chars]) {
      help.push(brackets[chars]);
    } else {
      if (help.pop() !== chars) return false;
     }
  }

  return (!help.length);
};


console.log(isValid("{}[]"))