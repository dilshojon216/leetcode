var titleToNumber = function (columnTitle) {
  let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    sum = sum * 26 + columnTitle.charCodeAt(i) - 64;
  }
  return sum;
};

console.log(titleToNumber("ZY"));
