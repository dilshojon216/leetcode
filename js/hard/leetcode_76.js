var minWindow = function (s, t) {
  let map = new Map();
  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }
  let count = map.size;
  let left = 0;
  let right = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let res = "";
  while (right < s.length) {
    let c = s[right];
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) {
        count--;
      }
    }
    right++;
    while (count === 0) {
      if (right - left < min) {
        min = right - left;
        res = s.substring(left, right);
      }
      let c = s[left];
      if (map.has(c)) {
        map.set(c, map.get(c) + 1);
        if (map.get(c) > 0) {
          count++;
        }
      }
      left++;
    }
  }
  return res;
};
