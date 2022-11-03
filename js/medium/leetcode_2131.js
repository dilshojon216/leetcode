/*
Input: words = ["lc","cl","gg"]
Output: 6
Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
Note that "clgglc" is another longest palindrome that can be created

*/

var longestPalindrome = function (words) {
  let map = new Map();
  for (let s of words) {
    map.set(s, (map.get(s) || 0) + 1);
  }

  let sumDiff = 0;
  let sumSame = 0;
  let sameAndOdd = 0;
  for (let [s, count] of map) {
    if (s[0] !== s[1]) {
      const sReverse = s[1] + s[0];
      if (map.has(sReverse)) {
        sumDiff += Math.min(count, map.get(sReverse)) * 4;
        map.set(sReverse, 0);
      }
    } else {
      sumSame += count * 2;
      if (count % 2) sameAndOdd++;
    }
  }

  if (sameAndOdd > 1) {
    sumSame -= 2 * (sameAndOdd - 1);
  }

  return Math.max(sumDiff + sumSame);
};
