var titleToNumber = function (columnTitle) {
  let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    sum = sum * 26 + columnTitle.charCodeAt(0) - 64;
  }
  return columnTitle.charCodeAt("A".charCodeAt(0));
};

console.log(titleToNumber("ZY"));
