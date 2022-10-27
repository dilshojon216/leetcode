//* 38. Count and Say*//
/* 
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1),
which is then converted into a different digit string.
To determine how you "say" a digit string, 
split it into the minimal number of substrings such that each substring contains exactly one unique digit. 
Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.
Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.



Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

*/

var countAndSay = function (n) {
  let result = "1";
  for (let i = 1; i < n; i++) {
    result = countAndSayHelper(result);
  }
  return result;

  function countAndSayHelper(str) {
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        result += count + str[i];
        count = 1;
      }
    }
    return result;
  }
};
