var convertToTitle = function (columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode((columnNumber % 26) + 65) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};
console.log(convertToTitle(701));
