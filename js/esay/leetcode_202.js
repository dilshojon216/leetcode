var isHappy = function (n) {
  let set = new Set();
  while (n != 1) {
    n = n
      .toString()
      .split("")
      .reduce((a, b) => a + Math.pow(b, 2), 0);
    if (set.has(n)) {
      return false;
    }
    set.add(n);
  }
  return true;
};
