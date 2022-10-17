var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];
  const dfs = (index, str) => {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    const digit = digits[index];
    for (const char of map[digit]) {
      dfs(index + 1, str + char);
    }
  };
  if (digits.length) {
    dfs(0, "");
  }
  return result;
};
