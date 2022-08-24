var convertToTitle = function (columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    let remainder = columnNumber % 26;
    if (remainder === 0) {
      result = "Z" + result;
      columnNumber = columnNumber / 26 - 1;
    } else {
      result = String.fromCharCode(remainder + 64) + result;
      columnNumber = columnNumber / 26;
    }
  }
  return result.split("@").join("");
};
console.log(convertToTitle(701));
