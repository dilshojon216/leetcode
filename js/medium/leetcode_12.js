var intToRoman = function (num) {
  let roman = "";
  let romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumListKeys = Object.keys(romanNumList);

  for (let i = 0; i < romanNumListKeys.length; i++) {
    // console.log(romanNumListKeys[i]);
    while (num >= romanNumList[romanNumListKeys[i]]) {
      console.log(romanNumList[romanNumListKeys[i]]);
      roman += romanNumListKeys[i];
      num -= romanNumList[romanNumListKeys[i]];
    }
  }
  return roman;
};
console.log(intToRoman(3));
