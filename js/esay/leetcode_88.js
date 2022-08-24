var merge = function (nums1, m, nums2, n) {
  if (nums1.length == 0) {
    return nums2;
  }
  if (nums2.length == 0) {
    return nums1;
  }
  let mArray = nums1.slice(0, m);
  let nArray = nums2.slice(0, n);
  let result = [];

  while (mArray.length > 0 && nArray.length > 0) {
    if (mArray[0] < nArray[0]) {
      result.push(mArray.shift());
    } else {
      result.push(nArray.shift());
    }
  }
  if (mArray.length > 0) {
    result = result.concat(mArray);
  }
  if (nArray.length > 0) {
    result = result.concat(nArray);
  }
  return result;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
