var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let max = 0;
  let map = new Map();
  while (right < s.length) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
    }
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};
