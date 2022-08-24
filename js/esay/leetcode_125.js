var isPalindrome = function (s) {
  if (s === "") return false;
  s = s.toLowerCase();
  var i = 0,
    j = s.length - 1;
  while (i < j) {
    if (!((s[i] >= "a" && s[i] <= "z") || (s[i] >= "0" && s[i] <= "9"))) {
      i++;
      continue;
    }
    if (!((s[j] >= "a" && s[j] <= "z") || (s[j] >= "0" && s[j] <= "9"))) {
      j--;
      continue;
    }
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};
console.log(isPalindrome(" "));
