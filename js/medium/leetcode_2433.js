var findArray = function (pref) {
  let res = [];
  let n = pref.length;
  let cur = 1;
  for (let i = 0; i < n; i++) {
    res.push(cur);
    cur += pref[i];
  }
  return res;
};
