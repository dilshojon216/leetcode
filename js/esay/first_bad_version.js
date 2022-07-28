var solution = function (isBadVersion) {
  return function (n) {
    let max = n,
      min = 0;
    let getMid = (num) => ((num - min) / 2 + min) | 0;
    let mid = getMid(max);
    while (min <= max) {
      if (isBadVersion(mid)) {
        max = mid - 1;
        mid = getMid(max);
      } else {
        min = mid + 1;
        mid = getMid(max);
      }
    }
    return mid + 1;
  };
};
