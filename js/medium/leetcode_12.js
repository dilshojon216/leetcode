/*
12. Integer to Roman


Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.


Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

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
