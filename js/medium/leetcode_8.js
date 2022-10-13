var myAtoi = function (s) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let result = 0;
  let sign = 1;
  let i = 0;
  while (s[i] === " ") {
    i++;
  }
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }
  while (s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s[i] - "0");
    if (result > INT_MAX) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    i++;
  }
  return result * sign;
};
